# Vitesse Enterprise Starter

<div align='center'>
  <img
    src='https://user-images.githubusercontent.com/11247099/154486432-9f424d8a-088a-47ab-92c5-b24a0e7c147e.png'
    alt='Vitesse - Opinionated Vite starter template with rigorous linting'
    width='600'
  />
</div>

<br>

<div align='center'>
  <h3>Demonstrations</h3>
  <a href="https://vitesse-enterprise.netlify.app/">Live on Netlify</a>
  <br>
  <a href="https://vitesse-enterprise.vercel.app/">Live on Vercel</a>
  <br>
  <a href="https://stackblitz.com/fork/github/FranciscoKloganB/vitesse-enterprise?file=.stackblitzrc">
    Playground on Stackblitz
  </a>
</div>

<br>


## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-core)

  - 🏃 [Vite 4](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [esbuild](https://github.com/evanw/esbuild)

- 🗂 [File based routing](./src/core/pages)

- 📦 [Components auto importing](./src/core/components)

- 🔎 [Component previews](https://github.com/johnsoncodehk/vite-plugin-vue-component-preview)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 📑 [Layout system](./src/core/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [UnoCSS](https://github.com/antfu/unocss)

- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🌍 [I18n ready](./locales)

- 🗒 [Markdown Support](https://github.com/antfu/vite-plugin-vue-markdown)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import)

- 🖨 Static-site generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

- 🦾 [TypeScript](https://www.typescriptlang.org/), of course

- 🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

- 🖌️ [SCSS](https://sass-lang.com/) support

- 👮🏻 Format and Lint with VSCode and CLI
  - 💾 [Eslint](https://eslint.org/), [Import Sort*](https://github.com/renke/import-sort),
  [Markdownlint](https://github.com/DavidAnson/markdownlint), [Prettier](https://prettier.io/)
  and, [Stylelint](https://stylelint.io/).

- 🤖 Standards checking with pre-commit hooks. Test validation on pre-push with [Husky](https://github.com/typicode/husky)

- ⚙️ E2E testing with [Cypress](https://cypress.io/)

- 📤 [GitHub Actions](https://github.com/features/actions)

- ☁️ Deploy on [Netlify](https://www.netlify.com/), zero-config - See [Netlify Deployment](#deploy-on-netlify)
- ☁️ Deploy on [Vercel](https://vercel.com/) - See [Vercel Deployment](#deploy-on-vercel)

**CLI only. VSCode plugin does not support configuration files.*


## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

#### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

#### Plugins

- [Vue Router](https://github.com/vuejs/router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages)
    - File system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
    - Layouts for pages
- [Pinia](https://pinia.vuejs.org)
  - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components)
  - Components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import)
  - Directly use Vue Composition API and others without importing
- [`unplugin-vue-macros`](https://github.com/sxzz/unplugin-vue-macros)
  - Explore and extend more macros and syntax sugar to Vue.
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa)
  - PWA
- [`vite-plugin-vue-component-preview`](https://github.com/johnsoncodehk/vite-plugin-vue-component-preview)
  - Preview single component in VSCode
- [`vite-plugin-vue-markdown`](https://github.com/antfu/vite-plugin-vue-markdown)
  - Markdown as components / components in Markdown
  - [`markdown-it-shiki`](https://github.com/antfu/markdown-it-shiki)
    - [Shiki](https://github.com/shikijs/shiki) for syntax highlighting
- [Vue I18n](https://github.com/intlify/vue-i18n-next)
  - [`unplugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n)
- [VueUse](https://github.com/antfu/vueuse)
  - Collection of useful composition APIs
- [`vite-ssg-sitemap`](https://github.com/jbaubree/vite-ssg-sitemap)
  - Sitemap generator
- [`@vueuse/head`](https://github.com/vueuse/head)
  - Manipulate document head reactively

#### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/)


#### Dev tools

- [Cypress](https://cypress.io/) - E2E Testing
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [PNPM](https://pnpm.js.org/) - fast, disk space efficient package manager
- [Recommended VSCode extensions](./.vscode/extensions.json) - Near IDE experience on VSCode
- [Typescript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - Unit testing powered by Vite
- [Vite-ssg](https://github.com/antfu/vite-ssg) - Static-site generation
  - [Critters](https://github.com/GoogleChromeLabs/critters) - Critical CSS

#### Developer Experience

- Alias `@` to `<rootDir>`
- Alias `~` to `<rootDir>/src` a.k.a. `<srcDir>`
- Predefined and fully typed global variables:
  - `VITE_APP_VERSION` is read from `package.json` version at build time
  - `VITE_APP_BUILD_EPOCH` is populated as `new Date().getTime()` at build time


## Variations

This template is strongly opinionated with my personal preferences and feature sets. It is a fork of
the [original template](https://github.com/antfu/vitesse) created by [@antfu](https://github.com/antfu)
and also takes inspiration from [vitesse-stackter](https://github.com/shamscorner/vitesse-stackter-clean-architect)
made by [@shamscorner](https://github.com/shamscorner).

For an up-to-date list of official and community contributions to the `vitesse ecosystem`, we recommend
checking the official repository's [variations section](https://github.com/antfu/vitesse#variations).

## Try it now

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/FranciscoKloganB/vitesse-enterprise/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit FranciscoKloganB/vitesse-enterprise my-vitesse-enterprise-app
cd my-vitesse-enterprise-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Remove `.github/funding.yml` file which contains the funding info
- [ ] Remove `vercel.json` or `netlify.yml` depending on your deployment provider.
- [ ] Rename `name` field in `package.json`
- [ ] Rename `projectId` field in `cypress.json`
- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the hostname in `vite.config.ts`
- [ ] Change the favicon in `public`
- [ ] Clean up the READMEs and remove routes
- [ ] Bump project dependencies (e.g.: dependabot) - We update them on a
best-effort-basis, every now and then.

## Usage

### Development

Run and visit <http://localhost:4000>

```bash
pnpm dev
```

### Code formatting and linting

```bash
pnpm lint
```

### Testing

```bash
pnpm run:test
```

### Build for production

```bash
# Alias for "run-s prebuild 'build:prod:ssg'"
pnpm run:build
# Other builds
# Ouputs files to dist folder. Ready to be served in SPA mode.
pnpm build:prod
# Outputs files to dist folder which passed through the Vite SSG pipeline. Ready to be served.
pnpm build:prod:ssg
```

### Previewing

```bash
# Runs project locally with files from dist folder
pnpm run:preview
# Can also run locally with HTTPS (may require sudo) - requires available dist/ folder
pnpm preview:https
```

### Separation of Concerns

- Create separate folder for each module and place them under `/src` folder
- The following folders are auto imported within each module
  - `components/`
  - `modules/`
  - `pages/`
  - `stores/`
- Place all the layouts in the `core/layouts` folder
- Place all the custom styles in the `core/assets/styles` folder and import them into `main.{css,scss}`

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way,
and your App will be live in a minute.

### Docker Production Build

First, build the vitesse image by opening the terminal in the project's root directory.

```bash
# One of either
DOCKER_BUILDKIT=1 docker build . -t vitesse:latest
# Docker Buildx is a CLI plugin to extend docker command and support BuildKit without the env var.
docker buildx build . -t vitesse:latest
```

Run the image and specify port mapping with the `-p` flag.

```bash
docker run --rm -it -p 8080:80 vitesse:latest
```

### Deploy on Vercel

Vercel has some short-commings regarding `pnpm` based projects. After creating
and importing the project on [Vercel dashboard](https://vercel.com/dashboard) you will
need to navigate to the project settings and override the `Build Command` and
`Install Command` respectively, with the following bash commands:

  ```bash
    # Build Command
    npx pnpm i --store=node_modules/.pnpm-store && npx pnpm run:build
    # Install Command
    npm i -g pnpm && pnpm -i
  ```

Alternatevely, for zero configuration on import you need to alter `package.json`
scripts to have a `build` and `install` entries with the commands above.

## Why

On top of what was mentioned by [Anthony Fu](https://github.com/antfu/) in the original
[post](https://github.com/antfu/vitesse#why), working in conjunction with others often
requires strict styling rules. Creating a seamless developer experience across VSCode,
CLI and CI/CD consumes time. Vue, Vite and, Vitesse, are amazing tools for web developmen
and are now my go to choices for development. To avoid repeating myself over and over
again for to get this configurations going, I decided to fork Vitesse repository and
create a baseline project for my own (or other people) use, enabling us to be *vite*.
Pun intended.

## Feedback

If you notice any bug, inconsistency or change for improvement, feel free to either create
an issue so that I may try to fix it later or to propose a pull request with the changes.
