# CLUMI UNIVERSE 사이트 관리 메모

정적 HTML/CSS 사이트입니다. `main` 브랜치에 푸시하면 Cloudflare에서 자동 배포됩니다.

## 자주 수정하는 파일

| 파일 | 역할 |
| --- | --- |
| `data/featured.json` | 홈페이지 대표 메뉴에 보여줄 토스 메뉴 ID 목록 |
| `data/reviews.json` | 네이버 리뷰 카드 데이터 |
| `data/store-info.json` | 주소, 영업시간, 전화번호, 네이버 지도 링크 |
| `index.html` | 화면 구조와 데이터 렌더링 |
| `styles.css` | 디자인과 애니메이션 |

## 대표 메뉴 바꾸기

대표 메뉴는 `data/featured.json`의 숫자 ID 순서대로 표시됩니다.

메뉴 ID는 `data/tossplace-menu/238090/menu.json`의 `items[].id` 값을 사용합니다. 직접 고르기 번거로우면 아래 도우미를 실행합니다.

```bash
node scripts/update-menu.mjs
```

자동 검증용으로는 아래처럼 실행할 수 있습니다.

```bash
node scripts/update-menu.mjs --no-fetch --keep --no-deploy
```

## 영업시간과 지도 링크 수정

`data/store-info.json`에서 수정합니다.

- 화면에 보이는 문구: `hours.weekday`, `hours.weekend`, `hours.note`
- 오늘 영업 상태 계산: `businessHours.weekday`, `businessHours.weekend`
- 네이버 지도 버튼과 지도 카드 링크: `links.naverMap`

`businessHours`는 `HH:MM` 형식으로 입력합니다.

## 토스 메뉴 최신화

토스 메뉴 API에서 최신 메뉴와 이미지를 다시 받습니다.

```bash
node scripts/fetch-toss-menu.mjs
```

빠르게 데이터만 확인하려면 이미지는 받지 않을 수 있습니다.

```bash
node scripts/fetch-toss-menu.mjs --no-images
```

인자를 생략하면 클루미유니버스 토스 주문 주소(`https://store.tossplace.com/order/238090`)를 기본값으로 사용합니다. 다른 매장을 테스트할 때만 ID나 URL을 붙이면 됩니다.

생성되는 주요 파일:

| 파일 | 역할 |
| --- | --- |
| `data/tossplace-menu/238090/menu.json` | 사이트가 읽는 메뉴 데이터 |
| `data/tossplace-menu/238090/images/` | 메뉴 이미지 |
| `data/tossplace-menu/238090/menu.csv` | 사람이 보기 쉬운 메뉴 목록 |
| `data/tossplace-menu/238090/state.json` | 이미지 중복 다운로드를 줄이는 캐시 |

`menu.csv`와 `state.json`은 저장소에는 남기지만 배포 자산에서는 제외합니다.

## 배포

```bash
git status
git add .
git commit -m "update: 내용 설명"
git push origin main
```

Cloudflare 빌드는 `wrangler.jsonc`와 `.assetsignore`를 사용합니다. `.git`, 개발 스크립트, README, 캐시 파일은 배포 자산에서 빠집니다.

## 구조

```text
Clumi/
├── index.html
├── styles.css
├── data/
│   ├── featured.json
│   ├── reviews.json
│   ├── store-info.json
│   └── tossplace-menu/238090/
│       ├── menu.json
│       ├── menu.csv
│       ├── state.json
│       └── images/
├── assets/
│   ├── bg/
│   ├── characters/
│   └── clumi-*.jpg/png
├── scripts/
│   ├── fetch-toss-menu.mjs
│   └── update-menu.mjs
└── wrangler.jsonc
```
