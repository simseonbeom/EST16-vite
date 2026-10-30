# EST16 Vite

EST16 과정에서 Vite 빌드 도구를 실습한 코드 저장소입니다.

## 학습 목차

| No. | 실습 | 폴더 링크 | 주요 내용 |
| --- | --- | --- | --- |
| 01 | Vite 수동 설정 | [vite-manual](./vite-manual) | `npm`으로 `vite` 직접 설치, `dev`·`build`·`preview` 스크립트 구성, `vite.config.js`의 `defineConfig`로 `server`(`host`, `port: 3000`, `cors`)·`build.outDir: 'docs'` 설정, `index.html`의 `<script type="module">` 진입점, `public/` 정적 파일(`favicon.svg`), `src/assets` 이미지 `import`(정적 자산 불러오기) 후 `insertAdjacentHTML`로 렌더링, 빌드 결과물의 해시 파일명 |

## 시작하기

```bash
cd vite-manual
npm install
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # docs/ 폴더로 빌드
npm run preview  # 빌드 결과 미리보기
```
