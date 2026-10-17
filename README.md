# Daehee Kang — Portfolio

English by default; Korean translation with the KO / EN button. Plain HTML, CSS and JavaScript, with no build step or external dependencies.

## Publish to GitHub Pages

1. Create a **public** repository named **archivehee.github.io** under **archivehee**. Initialize it with a README so that a main branch exists.
2. Upload the contents of this folder to the repository root, including `assets/`. Do not upload the ZIP itself or wrap the site inside an extra folder.
3. In **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**; select **Save**.
4. Wait for the Pages deployment to finish. The site URL is https://archivehee.github.io/ . This URL becomes live only after deployment succeeds.

## 직접 수정하는 방법

- 소개, 논문, 프로젝트, 특허, 기술: `content.js`
- 사진: `assets/portrait.jpg`
- 커피 이미지: `assets/coffee-collection.jpeg`, `assets/coffee-corner.jpeg`
- 색상, 여백, 글꼴, 모바일 레이아웃: `style.css`
- 페이지 구조: `index.html`

GitHub에서 파일을 열고 연필(Edit) 버튼을 선택한 다음 수정하고 **Commit changes**를 누르십시오. Pages 배포가 완료되면 변경 사항이 반영됩니다.

`content.js`의 `en`은 영어, `ko`는 한국어입니다. 두 값을 함께 수정하십시오. 문자열 속 작은따옴표는 `\'`로 작성하거나 큰따옴표 문자열을 사용하십시오. 기존 객체와 배열의 쉼표/괄호를 유지하십시오.

국내 논문 추가 예시 — `domestic: []`를 아래처럼 변경:

```js
domestic: [{
  title: '논문 제목',
  venue: '학술대회 이름',
  date: '2026.10',
  description: {en: 'English summary', ko: '한국어 설명'},
  paper: 'https://example.com/paper'
}],
```

특허 추가 예시 — `patents: []`를 아래처럼 변경:

```js
patents: [{
  title: {en: 'Patent title', ko: '특허 제목'},
  description: {en: 'Application number and status', ko: '출원번호 및 출원/등록 상태'},
  url: 'https://example.com/patent'
}],
```

프로젝트에는 `url` 필드를 추가하면 프로젝트 링크가 표시됩니다.

## Content and image notes

- Profile, education, experience, skills and project text: supplied LinkedIn screenshots.
- Publication and ACM link: supplied by the owner. Code link: archivehee/Multi-TAP.
- Domestic publications: KCC 2025 (June) and KSC 2025 (December), supplied by the owner. No patent entries supplied.
- Coffee images: two original photographs supplied by the owner, arranged with CSS rotation.
- Portrait: original photograph supplied by the owner, displayed without AI reconstruction.
- No private LinkedIn analytics, certificate identifier or full screenshots are included.

## Local preview

Double-click `index.html`, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000 .

## Validation

JavaScript syntax and DOM rendering/language toggle are checked. Browser visual QA was unavailable in the creation environment; verify the layout on your preferred desktop and mobile browsers.

## Typography

Avenir Next / Avenir are used when installed on the visitor’s device. Trebuchet MS and system sans-serif fonts are fallbacks. No commercial font files are redistributed. Small text was enlarged by 1.5× (14→21px; 16→24px). Display headline sizes are preserved.

UNIST logo removed from the introduction at the owner’s request.
Lab and advisor links are in `index.html`.

The hero headline and text below it, including the photo caption, are scaled to 70% of the preceding version. Other sections retain their font sizes. Project link: https://zenodo.org/records/17510786 .
