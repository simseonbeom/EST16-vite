# EST16 Vite

EST16 과정에서 Vite 빌드 도구를 실습한 코드 저장소입니다.

## 학습 목차

| No. | 실습 | 폴더 링크 | 주요 내용 |
| --- | --- | --- | --- |
| 01 | Vite 수동 설정 | [vite-manual](./vite-manual) | `npm`으로 `vite` 직접 설치, `dev`·`build`·`preview` 스크립트 구성, `vite.config.js`의 `defineConfig`로 `server`(`host`, `port: 3000`, `cors`)·`build.outDir: 'docs'` 설정, `index.html`의 `<script type="module">` 진입점, `public/` 정적 파일(`favicon.svg`), `src/assets` 이미지 `import`(정적 자산 불러오기) 후 `insertAdjacentHTML`로 렌더링, 빌드 결과물의 해시 파일명, `resolve.alias`로 `@` 경로 별칭(`src`) 설정, `style.css` 전역 CSS `import`, `style.module.css` CSS Modules와 `css.modules.generateScopedName`의 `NODE_ENV`별 클래스명 규칙, `.env`의 `VITE_API_URL` 환경 변수, `import.meta.env` 확인, `index.html`의 `%MODE%`·`%VITE_API_URL%` 치환 |
| 02 | Vite 자동 설정 | [vite-auto](./vite-auto) | `create-vite` Vanilla 템플릿 기반 프로젝트 구성, `devDependencies`의 `vite`, `dev`·`build`·`preview` 기본 스크립트, `index.html`의 `#app`·`<script type="module">` 진입점, `src/main.js`·`src/style/style.css` 폴더 구조 정리 |
| 03 | TypeScript 기초 타입 | [ts-manual](./ts-manual) | `devDependencies`의 `typescript` 설치, `tsconfig.json`의 `include`·`outDir: 'dist'`·`rootDir`·`strict`·`noImplicitAny`·`strictNullChecks`·`moduleDetection` 설정, 타입 추론과 명시적 타입 표기, `number`·`string`·`boolean`·`null`·`undefined` 원시 타입과 리터럴 타입, `number[]`·`Array<number>` 배열 타입, 유니온 타입 배열과 튜플, 객체 타입의 선택적 프로퍼티(`?`)·`readonly`, `type` 별칭과 교차 타입(`&`), `interface` 선언 병합·`extends`, 함수 타입 정의, 인덱스 시그니처, `any`와 `unknown` 비교 및 `typeof`·`instanceof` 타입 좁히기, `void`·`never` 반환 타입, `Generator<T, TReturn, TNext>` 제너레이터 타입, 리터럴 유니온 타입과 교차 타입 활용, `typeof`·`instanceof`·`in` 연산자를 이용한 유니온 타입 좁히기(narrowing), `as`·`querySelector<T>` 제네릭·`!` non-null 타입 단언과 `as const` 단언, `typeof`·`keyof`·`T[keyof T]` 타입 연산자, `.d.ts` 전역 타입 선언, 제네릭 타입 별칭·함수·`interface`(`<T, U>`), `extends` 제네릭 제약, 조건부 타입과 `infer`, 콜백 함수 타입(`map`·`forEach`·`filter`·`reduce` 직접 구현) 등 함수 타입 지정, `Omit`·`Pick`·`Partial`·`Required`·`Record` 유틸리티 타입과 매핑된 타입(`[K in keyof T]`)·`DeepPartial` 구현, `declare global` 전역 `interface` 선언, PokeAPI 응답 기반 `Pokemon` 인터페이스 정의, `Promise<T>` 반환 타입과 제네릭 `fetchData<T>`, `satisfies` 연산자, `Awaited`·`ReturnType`, `Promise.all`로 여러 데이터 병렬 요청 후 카드 렌더링, 타입별 연습 문제 |
| 04 | Vite + TypeScript 자동 설정 | [ts-auto](./ts-auto) | `create-vite` Vanilla TypeScript 템플릿 기반 프로젝트 구성, `build`의 `tsc && vite build` 타입 검사, `tsconfig.json`의 `moduleResolution: 'bundler'`·`noEmit`·`verbatimModuleSyntax`·`types: ['vite/client']` 설정, `import type`으로 `Todo` `interface`·`TodoList` 타입 분리, `as const` 객체로 `localStorage` 키 관리와 `saveStorage`·`loadStorage` 함수 타입 지정, `as HTMLInputElement` 타입 단언과 `SubmitEvent` 이벤트 타입, `style.module.css` CSS Modules와 `:global()` 선택자, Todo 앱 추가·렌더링 구현 |

## 시작하기

```bash
cd vite-manual
npm install
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # docs/ 폴더로 빌드
npm run preview  # 빌드 결과 미리보기
```
