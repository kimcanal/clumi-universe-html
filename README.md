# CLUMI UNIVERSE — 웹사이트 관리 가이드

> 이 문서는 **Antigravity AI**와 함께 웹사이트를 쉽게 관리하는 방법을 설명합니다.
> 코드를 몰라도 괜찮습니다. 아래 안내대로만 따라오시면 됩니다.

---

## 📁 중요한 파일 3개 (여기만 수정하면 됩니다)

| 파일 | 역할 | 예시 요청 |
|------|------|----------|
| `data/featured.json` | 홈페이지 메뉴 섹션에 표시할 메뉴 목록 | "딸기왕창와플 빼고 베리베리와플 넣어줘" |
| `data/reviews.json` | 손님 리뷰 카드 목록 | "새 리뷰 추가해줘: [리뷰 내용]" |
| `data/store-info.json` | 주소, 영업시간, 전화번호 | "토요일 영업 시간 11시로 바꿔줘" |

---

## 🤖 Antigravity에게 말하는 방법 (예시)

```
리뷰 추가:
  "리뷰 추가해줘. 작성자: 홍길동, 날짜: 2026.05,
   내용: 와플이 너무 맛있어요! 재방문 의사 100%"

메뉴 변경:
  "대표 메뉴 섹션에서 '클래식 와플' 빼고
   '베리베리와플' 추가해줘. 이미지는
   011-벨기에와플-베리베리와플 써줘"

영업시간 수정:
  "토요일 영업 시작 시간 11시로 바꿔줘"

변경사항 배포:
  "변경사항 깃허브에 올려줘"
```

---

## 🍽 메뉴 이미지 ID 찾는 방법

`assets/toss-menu/images/` 폴더 안에 있는 파일 이름이 그대로 ID입니다.

예: `031-인기-메뉴-no-1-딸기왕창와플.jpg` → ID는 `031-인기-메뉴-no-1-딸기왕창와플`

`data/featured.json` 에 이 ID를 추가하면 홈페이지에 표시됩니다.

---

## 🔄 토스 메뉴 새로 받기 (신메뉴 추가됐을 때)

터미널에서 아래 명령어를 실행하세요:

```bash
node scripts/fetch-menu.js
```

실행하면 `assets/toss-menu/toss-menu.json`과 이미지들이 자동으로 최신화됩니다.

---

## 🚀 변경사항 배포하기

Antigravity에게 "깃허브에 올려줘" 라고 하면 자동으로 해줍니다.

직접 하려면:

```bash
git add data/
git commit -m "내용 업데이트"
git push
```

→ Cloudflare Pages에서 자동 배포됩니다 (약 1~2분 소요)

---

## 🔗 외부 링크 모음

| 서비스 | 링크 | 관리 주체 |
|--------|------|----------|
| 토스 픽업 주문 | https://store.tossplace.com/order/238090 | 사장님 |
| 네이버 플레이스 | https://naver.me/F9hNJomf | 사장님 |
| 인스타그램 | https://www.instagram.com/clumi.universe/ | 사장님 |
| Cloudflare (호스팅) | https://dash.cloudflare.com | - |

---

## 🗂 파일 구조

```
Clumi/
├── index.html              ← 홈페이지 (자동 렌더링, 직접 수정 불필요)
├── styles.css              ← 디자인 스타일
│
├── data/                   ★ 여기만 수정하세요
│   ├── featured.json       ← 메뉴 섹션에 보여줄 메뉴 ID 목록
│   ├── reviews.json        ← 리뷰 카드 데이터
│   └── store-info.json     ← 주소, 영업시간, 전화번호
│
├── assets/
│   ├── bg/                 ← 매장 배경/갤러리 사진
│   └── toss-menu/
│       ├── toss-menu.json  ← 토스 전체 메뉴 데이터
│       └── images/         ← 토스에서 받은 고화질 메뉴 사진들
│
└── scripts/
    └── fetch-menu.js       ← 토스 메뉴 자동 업데이트 스크립트
```
