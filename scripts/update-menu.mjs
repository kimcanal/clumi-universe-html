#!/usr/bin/env node
/**
 * update-menu.mjs
 * 토스 메뉴를 받아서 홈페이지에 표시할 메뉴를 선택하고 배포까지 한 번에 처리합니다.
 *
 * 사용법:
 *   node scripts/update-menu.mjs
 */

import { execSync } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import * as readline from 'node:readline/promises';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const MENU_JSON = path.join(ROOT, 'data/tossplace-menu/238090/menu.json');
const FEATURED_JSON = path.join(ROOT, 'data/featured.json');
const MERCHANT_ID = '238090';

// ── 색상 헬퍼 ────────────────────────────────────────────────────
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
  gray: '\x1b[90m',
};
const bold = s => `${c.bold}${s}${c.reset}`;
const yellow = s => `${c.yellow}${s}${c.reset}`;
const green = s => `${c.green}${s}${c.reset}`;
const cyan = s => `${c.cyan}${s}${c.reset}`;
const gray = s => `${c.gray}${s}${c.reset}`;
const red = s => `${c.red}${s}${c.reset}`;
const dim = s => `${c.dim}${s}${c.reset}`;

function hr(char = '─', len = 60) {
  return gray(char.repeat(len));
}

// ── 유틸 ─────────────────────────────────────────────────────────
async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, 'utf8'));
}

async function writeJson(filePath, value) {
  await writeFile(filePath, JSON.stringify(value, null, 2) + '\n', 'utf8');
}

function runFetch() {
  console.log('\n' + yellow('🔄  토스 메뉴 최신화 중...'));
  try {
    execSync(`node "${path.join(__dirname, 'fetch-toss-menu.mjs')}" ${MERCHANT_ID} --concurrency 8`, {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    console.log(green('✅  최신 메뉴 데이터 저장 완료'));
  } catch (err) {
    console.error(red('❌  메뉴 fetch 실패:'), err.stderr?.toString().trim() || err.message);
    throw err;
  }
}

function parseSelection(input, max) {
  const raw = input.trim().split(/[\s,]+/).filter(Boolean);
  const indices = [];
  for (const token of raw) {
    const n = parseInt(token, 10);
    if (isNaN(n) || n < 1 || n > max) return null; // 잘못된 입력
    if (!indices.includes(n)) indices.push(n);
  }
  return indices;
}

// ── 메인 ─────────────────────────────────────────────────────────
async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  try {
    console.log('\n' + bold('━'.repeat(60)));
    console.log(bold(yellow('  🧇  CLUMI UNIVERSE — 메뉴 업데이트 도우미')));
    console.log(bold('━'.repeat(60)));

    // ── STEP 1: fetch 여부 확인 ───────────────────────────────────
    const doFetch = await rl.question(
      `\n${cyan('STEP 1')}  토스에서 최신 메뉴를 새로 받을까요? ${dim('(y/n, 기본: y)')} `
    );

    if (doFetch.trim().toLowerCase() !== 'n') {
      runFetch();
    } else {
      console.log(dim('  → 기존 메뉴 데이터를 사용합니다.'));
    }

    // ── STEP 2: 메뉴 목록 표시 ───────────────────────────────────
    let menuData;
    try {
      menuData = await readJson(MENU_JSON);
    } catch {
      console.error(red('\n❌  메뉴 데이터 파일이 없습니다. 먼저 fetch를 실행해 주세요.'));
      process.exit(1);
    }

    let featured;
    try {
      featured = await readJson(FEATURED_JSON);
    } catch {
      featured = [];
    }

    const featuredSet = new Set(featured.map(Number));
    const items = menuData.items || [];

    console.log('\n' + hr());
    console.log(bold(`\n  ${cyan('STEP 2')}  전체 메뉴 목록 (총 ${items.length}개)\n`));
    console.log(hr());

    // 카테고리별로 그룹화해서 출력
    const byCategory = new Map();
    for (const item of items) {
      const cat = item.categoryTitle || '기타';
      if (!byCategory.has(cat)) byCategory.set(cat, []);
      byCategory.get(cat).push(item);
    }

    let globalIdx = 1;
    const indexToId = {}; // 번호 → item.id 매핑

    for (const [cat, catItems] of byCategory) {
      console.log(`\n  ${bold(yellow(cat))}`);
      for (const item of catItems) {
        const isFeatured = featuredSet.has(item.id);
        const star = isFeatured ? green(' ★') : '  ';
        const state = item.state === 'SOLD_OUT' ? red(' [품절]') : '';
        const priceStr = item.priceValue ? dim(` ${item.priceValue.toLocaleString()}원`) : '';
        console.log(`  ${gray(String(globalIdx).padStart(3, ' '))}${star}  ${item.title}${priceStr}${state}`);
        indexToId[globalIdx] = item.id;
        globalIdx++;
      }
    }

    // 현재 선택 현황 출력
    const currentlyFeatured = items.filter(i => featuredSet.has(i.id));
    console.log('\n' + hr());
    console.log(`\n  ${bold('현재 홈페이지에 표시 중인 메뉴')} ${green('★')} (${currentlyFeatured.length}개):`);
    currentlyFeatured.forEach(i => console.log(`    ${green('★')}  ${i.title}`));
    console.log('\n' + hr());

    // ── STEP 3: 선택 ─────────────────────────────────────────────
    console.log(`
  ${cyan('STEP 3')}  홈페이지에 표시할 메뉴를 선택하세요.
  ${dim('• 번호를 쉼표 또는 공백으로 구분해서 입력')}
  ${dim('• 순서대로 왼쪽→오른쪽으로 표시됩니다')}
  ${dim('• 최대 10개 권장 (너무 많으면 스크롤 UX 저하)')}
  ${dim('• 그냥 Enter: 현재 선택 유지')}\n`);

    let selectedIndices = null;
    while (true) {
      const input = await rl.question(`  ${bold('번호 입력')} > `);
      if (input.trim() === '') {
        console.log(dim('  → 현재 선택을 유지합니다.'));
        selectedIndices = null;
        break;
      }
      selectedIndices = parseSelection(input, Object.keys(indexToId).length);
      if (selectedIndices === null) {
        console.log(red(`  잘못된 입력입니다. 1~${Object.keys(indexToId).length} 사이의 숫자를 입력하세요.`));
      } else if (selectedIndices.length === 0) {
        console.log(red('  최소 1개 이상 선택해 주세요.'));
      } else {
        break;
      }
    }

    if (selectedIndices !== null) {
      const newFeatured = selectedIndices.map(i => indexToId[i]);
      await writeJson(FEATURED_JSON, newFeatured);

      console.log('\n' + green('✅  featured.json 업데이트 완료!'));
      console.log('  선택된 메뉴:');
      newFeatured.forEach((id, i) => {
        const item = items.find(it => it.id === id);
        console.log(`    ${i + 1}. ${item?.title || id}`);
      });
    }

    // ── STEP 4: 배포 ─────────────────────────────────────────────
    const doDeploy = await rl.question(
      `\n${cyan('STEP 4')}  깃허브에 올리고 배포할까요? ${dim('(y/n, 기본: n)')} `
    );

    if (doDeploy.trim().toLowerCase() === 'y') {
      console.log('\n' + yellow('🚀  배포 중...'));
      try {
        execSync('git add data/ && git commit -m "update: 메뉴 업데이트" && git push', {
          cwd: ROOT,
          stdio: 'inherit',
        });
        console.log('\n' + green('🎉  배포 완료! Cloudflare Pages에서 자동으로 반영됩니다.'));
        console.log(dim('   (보통 1~2분 소요)'));
      } catch (err) {
        console.error(red('❌  배포 실패. 변경사항이 없거나 git 오류입니다.'));
      }
    } else {
      console.log(dim('\n  → 배포를 건너뜁니다. 나중에 "git push"로 배포하세요.'));
    }

    console.log('\n' + bold('━'.repeat(60)));
    console.log(bold(green('  완료! 수고하셨습니다 🧇')));
    console.log(bold('━'.repeat(60)) + '\n');

  } finally {
    rl.close();
  }
}

main().catch(err => {
  console.error(red('\n오류 발생:'), err.message);
  process.exit(1);
});
