# EST16 Vite

EST16 과정에서 Vite 빌드 도구를 실습한 코드 저장소입니다.

## 학습 목차

| No. | 실습 | 폴더 링크 | 주요 내용 |
| --- | --- | --- | --- |
| 01 | Vite 수동 설정 | [vite-manual](./vite-manual) | `npm`으로 `vite` 직접 설치, `dev`·`build`·`preview` 스크립트 구성, `vite.config.js`의 `defineConfig`로 `server`(`host`, `port: 3000`, `cors`)·`build.outDir: 'docs'` 설정, `index.html`의 `<script type="module">` 진입점, `public/` 정적 파일(`favicon.svg`), `src/assets` 이미지 `import`(정적 자산 불러오기) 후 `insertAdjacentHTML`로 렌더링, 빌드 결과물의 해시 파일명, `resolve.alias`로 `@` 경로 별칭(`src`) 설정, `style.css` 전역 CSS `import`, `style.module.css` CSS Modules와 `css.modules.generateScopedName`의 `NODE_ENV`별 클래스명 규칙, `.env`의 `VITE_API_URL` 환경 변수, `import.meta.env` 확인, `index.html`의 `%MODE%`·`%VITE_API_URL%` 치환 |
| 02 | Vite 자동 설정 | [vite-auto](./vite-auto) | `create-vite` Vanilla 템플릿 기반 프로젝트 구성, `devDependencies`의 `vite`, `dev`·`build`·`preview` 기본 스크립트, `index.html`의 `#app`·`<script type="module">` 진입점, `src/main.js`·`src/style/style.css` 폴더 구조 정리 |

## 시작하기

```bash
cd vite-manual
npm install
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # docs/ 폴더로 빌드
npm run preview  # 빌드 결과 미리보기
```
