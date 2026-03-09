# Jekyll → Astro 마이그레이션 Task

## 현재 상태 (Jekyll)

기존 Jekyll 사이트에서 아래 작업이 완료된 상태:
- Tailwind CSS Play CDN 적용 (SCSS 제거)
- FontAwesome 4.x → 6.x CDN 교체
- particles.js → tsParticles v2 교체
- Inter + JetBrains Mono 폰트 적용
- 카드 UI 레이아웃 (Work, Open Source, Education 섹션)
- 기술 스택 뱃지 (skill-badge)
- 다크 사이드바 + 메인 콘텐츠 2단 레이아웃

---

## 마이그레이션 목표

| 항목 | Before | After |
|------|--------|-------|
| 프레임워크 | Jekyll (Ruby) | Astro |
| CSS | Tailwind Play CDN | Tailwind (astro 통합) |
| 데이터 | `_data/*.yml` | `src/data/*.ts` (또는 yml 유지) |
| 템플릿 | Liquid | Astro 컴포넌트 (.astro) |
| 배포 | GitHub Pages (Jekyll 빌드) | GitHub Pages (Astro 빌드 via Actions) |
| 로컬 실행 | `jekyll serve` (Ruby) | `npm run dev` (Node.js) |

---

## Tasks

### 1. 프로젝트 초기화
- [x] 1.1 Astro 프로젝트 생성 (`npm create astro@latest`)
- [x] 1.2 Tailwind CSS 통합 (`npx astro add tailwind`)
- [x] 1.3 `tailwind.config.mjs` 커스텀 설정 (Inter 폰트, sidebar 컬러 등)
- [x] 1.4 `package.json` 확인 및 의존성 정리

### 2. 데이터 마이그레이션
- [x] 2.1 `_data/work.yml` → `src/data/work.ts` (타입 정의 포함)
- [x] 2.2 `_data/education.yml` → `src/data/education.ts`
- [x] 2.3 `_data/opensource.yml` → `src/data/opensource.ts`
- [x] 2.4 `_config.yml` 사이트 설정 → `src/config/site.ts`

### 3. 레이아웃 컴포넌트
- [x] 3.1 `src/layouts/BaseLayout.astro` - HTML 기본 구조, head 메타
- [x] 3.2 `src/components/Sidebar.astro` - 다크 사이드바 (이름, 타이틀, 소셜 링크, 네비)
- [x] 3.3 tsParticles 사이드바 배경 적용

### 4. 섹션 컴포넌트
- [x] 4.1 `src/components/About.astro`
- [x] 4.2 `src/components/Education.astro`
- [x] 4.3 `src/components/OpenSource.astro`
- [x] 4.4 `src/components/WorkCard.astro` - 카드 + 기술 스택 뱃지
- [x] 4.5 `src/components/Works.astro`

### 5. 페이지
- [x] 5.1 `src/pages/index.astro` - 메인 페이지 조립

### 6. 정적 에셋
- [x] 6.1 `assets/js/sweet-scroll.min.js` → `public/js/` 이동
- [x] 6.2 `assets/img/` → `public/img/` 이동
- [x] 6.3 FontAwesome 6 CDN → `BaseLayout.astro` head에 추가

### 7. GitHub Actions 배포 설정
- [x] 7.1 `.github/workflows/deploy.yml` 작성 (main push 시 자동 배포)
- [x] 7.2 `astro.config.mjs`에 site + base 설정 추가
  ```js
  export default defineConfig({
    site: 'https://wdh2100.github.io',
    integrations: [tailwind()],
  })
  ```
- [ ] 7.3 GitHub 레포 Settings → Pages → Source를 `GitHub Actions`로 변경
- [ ] 7.4 main push 후 Actions 탭에서 배포 확인

### 8. 구 Jekyll 파일 정리
- [x] 8.1 `_includes/`, `_layouts/`, `_sass/`, `_data/` 제거
- [x] 8.2 `_config.yml`, `Gemfile`, `assets/css/layout.scss` 제거
- [x] 8.3 `feed.xml` 제거 (필요시 Astro RSS 플러그인으로 대체)

---

## 참고

- Astro 공식 문서: https://docs.astro.build
- Astro Tailwind 통합: https://docs.astro.build/en/guides/integrations-guide/tailwind/
- Astro GitHub Pages 배포: https://docs.astro.build/en/guides/deploy/github/
- tsParticles Astro: `@tsparticles/astro` 패키지 사용 가능
