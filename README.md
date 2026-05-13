# wdh2100 Portfolio

Astro와 Tailwind CSS로 만든 개인 포트폴리오 웹사이트입니다. 기존 Jekyll 기반 Particle 테마를 Astro 컴포넌트 구조로 마이그레이션했으며, GitHub Pages와 GitHub Actions를 통해 정적 사이트로 배포합니다.

## Tech Stack

- Astro 4
- Tailwind CSS
- TypeScript data modules
- GitHub Pages
- GitHub Actions

## Project Structure

```text
.
├── .github/workflows/deploy.yml   # GitHub Pages 배포 워크플로
├── public/                        # 정적 에셋
│   ├── img/
│   └── js/
├── src/
│   ├── components/                # 화면 섹션 및 UI 컴포넌트
│   ├── config/site.ts             # 사이트 기본 정보
│   ├── data/                      # 경력, 교육, 오픈소스 데이터
│   ├── layouts/BaseLayout.astro   # 공통 HTML 레이아웃
│   ├── pages/index.astro          # 메인 페이지
│   └── styles/global.css          # 전역 스타일
├── astro.config.mjs
├── package.json
└── tailwind.config.mjs
```

## Getting Started

### Requirements

`package.json` 기준 Node.js `>=24.0.0` 환경을 사용합니다.

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Astro 개발 서버가 실행되면 터미널에 표시되는 로컬 주소에서 사이트를 확인할 수 있습니다.

### Build

```bash
npm run build
```

빌드 결과물은 `dist/` 디렉터리에 생성됩니다.

### Preview

```bash
npm run preview
```

빌드된 정적 사이트를 로컬에서 미리 확인합니다.

## Content Editing

사이트의 주요 콘텐츠는 `src/config`와 `src/data`에서 관리합니다.

- 기본 프로필, 메타데이터, 소셜 링크: `src/config/site.ts`
- 경력 정보: `src/data/work.ts`
- 교육 정보: `src/data/education.ts`
- 오픈소스 정보: `src/data/opensource.ts`

화면 구성은 `src/pages/index.astro`에서 조립하며, 각 섹션은 `src/components` 아래의 Astro 컴포넌트로 분리되어 있습니다.

## Styling

Tailwind CSS를 사용합니다.

- Tailwind 설정: `tailwind.config.mjs`
- 전역 스타일: `src/styles/global.css`
- 공통 레이아웃 및 외부 리소스 설정: `src/layouts/BaseLayout.astro`

## Deployment

GitHub Actions 워크플로는 `.github/workflows/deploy.yml`에 정의되어 있습니다.

`main` 브랜치에 push하거나 Actions 탭에서 수동 실행하면 다음 순서로 배포됩니다.

1. 의존성 설치
2. Astro 정적 빌드
3. `dist/` 업로드
4. GitHub Pages 배포

GitHub 저장소 설정에서 Pages Source가 `GitHub Actions`로 지정되어 있어야 합니다.

## Notes

- 이전 Jekyll 구조의 `_data`, `_includes`, `_layouts`, `_sass`, `_config.yml`, `Gemfile` 등은 Astro 마이그레이션 과정에서 제거되었습니다.
- `assets/` 아래에는 이전 테마의 잔여 파일이 남아 있을 수 있으며, 실제 Astro 정적 리소스는 `public/`을 기준으로 사용합니다.
