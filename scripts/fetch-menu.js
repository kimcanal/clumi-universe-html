#!/usr/bin/env node
/**
 * fetch-menu.js
 * 토스 플레이스에서 최신 메뉴 데이터를 받아 assets/toss-menu/ 를 업데이트합니다.
 *
 * 사용법:
 *   node scripts/fetch-menu.js
 *
 * 필요 패키지 (처음 한 번만 실행):
 *   npm install
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const MERCHANT_ID = 238090;
const OUT_DIR = path.join(__dirname, '..', 'assets', 'toss-menu');
const IMAGES_DIR = path.join(OUT_DIR, 'images');
const JSON_OUT = path.join(OUT_DIR, 'toss-menu.json');

// ── 유틸 ─────────────────────────────────────────────────────────
function httpsGet(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { ...options, timeout: 15000 }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return httpsGet(res.headers.location, options).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks), headers: res.headers }));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function slug(categoryName, title, index) {
  const cat = categoryName.replace(/\s+/g, '').replace(/[^\w가-힣]/g, '-');
  const name = title.replace(/\s+/g, '-').replace(/[^\w가-힣-]/g, '').slice(0, 40);
  const idx = String(index).padStart(3, '0');
  return `${idx}-${cat}-${name}`.toLowerCase().replace(/--+/g, '-');
}

// ── 메인 ─────────────────────────────────────────────────────────
async function main() {
  console.log('📡 토스 플레이스 메뉴 데이터를 가져오는 중...');

  // 1. Toss Place API 호출
  const apiUrl = `https://store.tossplace.com/api/v1/merchant/${MERCHANT_ID}/menus`;
  let apiData;
  try {
    const res = await httpsGet(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Referer': `https://store.tossplace.com/order/${MERCHANT_ID}`
      }
    });
    apiData = JSON.parse(res.body.toString());
    console.log(`✅ API 응답 성공`);
  } catch (err) {
    console.error('❌ API 호출 실패:', err.message);
    console.log('⚠️  기존 toss-menu.json을 유지합니다.');
    process.exit(0);
  }

  // 2. 카테고리/아이템 정리
  const categories = apiData.categories || apiData.menuCategories || [];
  const items = [];
  let globalIndex = 1;

  for (const cat of categories) {
    const catName = cat.name || cat.categoryName || '기타';
    const catNameEn = cat.nameEn || cat.categoryNameEn || catName;
    const products = cat.products || cat.menuItems || cat.items || [];
    for (const p of products) {
      const title = p.name || p.title || '';
      const itemSlug = slug(catName, title, globalIndex);
      const ext = (p.imageUrl || p.originalImageUrl || '').match(/\.(png|gif|webp)$/i)?.[1] || 'jpg';
      items.push({
        id: p.id,
        categoryId: cat.id || cat.categoryId,
        category: catName,
        categoryEn: catNameEn,
        categoryOrder: cat.order ?? 0,
        position: globalIndex,
        title,
        description: p.description || p.descriptionText || '',
        state: p.status || p.state || 'AVAILABLE',
        price: p.price || 0,
        labels: p.labels || [],
        originalImageUrl: p.imageUrl || p.originalImageUrl || '',
        localImagePath: `assets/toss-menu/images/${itemSlug}.${ext}`,
        imageSlug: itemSlug,
        imageExt: ext
      });
      globalIndex++;
    }
  }

  if (items.length === 0) {
    console.warn('⚠️  메뉴 아이템을 파싱하지 못했습니다. API 응답 구조가 변경되었을 수 있습니다.');
    console.log('응답 키:', Object.keys(apiData));
    process.exit(0);
  }

  // 3. 이미지 폴더 준비
  if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });

  // 4. 이미지 다운로드 (이미 있으면 스킵)
  console.log(`\n🖼  이미지 다운로드 시작 (총 ${items.length}개)`);
  let downloaded = 0, skipped = 0, failed = 0;

  for (const item of items) {
    const imgPath = path.join(__dirname, '..', item.localImagePath);
    if (fs.existsSync(imgPath)) { skipped++; continue; }
    if (!item.originalImageUrl) { failed++; continue; }
    try {
      const res = await httpsGet(item.originalImageUrl);
      if (res.status === 200) {
        fs.writeFileSync(imgPath, res.body);
        downloaded++;
        process.stdout.write(`\r  ✅ ${downloaded}개 다운로드 / ${skipped}개 스킵 / ${failed}개 실패`);
      } else {
        failed++;
      }
    } catch {
      failed++;
    }
  }
  console.log(`\n  완료: ✅${downloaded} 스킵:${skipped} 실패:${failed}`);

  // 5. JSON 저장
  const output = {
    source: `https://store.tossplace.com/order/${MERCHANT_ID}`,
    fetchedAt: new Date().toISOString(),
    merchant: { id: MERCHANT_ID, name: apiData.merchantName || '클루미 유니버스' },
    summary: { total: items.length, downloaded, skipped, failed },
    categories: categories.map(c => ({ id: c.id, name: c.name })),
    items
  };

  fs.writeFileSync(JSON_OUT, JSON.stringify(output, null, 2), 'utf8');
  console.log(`\n💾 저장 완료: ${JSON_OUT}`);
  console.log(`   총 ${items.length}개 메뉴`);
  console.log('\n🎉 완료! 이제 data/featured.json 에서 보여줄 메뉴를 선택하세요.');
  console.log('   (localImagePath 의 이미지 파일명에서 앞 숫자 부분을 ID로 사용합니다)\n');
}

main().catch(err => {
  console.error('오류 발생:', err);
  process.exit(1);
});
