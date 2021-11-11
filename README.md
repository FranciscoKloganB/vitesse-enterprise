# Vitesse Enterprise Starter

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next)
  - [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild)

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🍍 [State Management via Pinia](https://pinia.esm.dev/)

- 📑 [Layout system](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [Windi CSS](https://github.com/windicss/windicss)

- 😃 [Use icons from any icon sets, with no compromise](https://github.com/antfu/unplugin-icons)

- 🌍 [I18n ready](./locales)

- 🗒 [Markdown Support](https://github.com/antfu/vite-plugin-md)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import)

- 🖨 Server-side generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

- 🦾 [TypeScript](https://www.typescriptlang.org/), of course

- 🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

- 🖌️ [SCSS](https://sass-lang.com/) support

- 👮🏻 Format and Lint with VSCode and CLI
  - [Eslint](https://eslint.org/), [Stylelint](https://stylelint.io/),
  [Markdownlint](https://github.com/DavidAnson/markdownlint), [Prettier](https://prettier.io/)

- 🪝 Standards checking with pre-commit hooks. Test validation on pre-push with [Husky](https://github.com/typicode/husky)

- ⚙️ Component and E2E Testing with [Cypress](https://cypress.io/)

- 📤 [GitHub Actions](https://github.com/features/actions) and [GitLab CI (wip)](https://github.com/features/actions)

- ☁️ Deploy on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/), zero-config


## Pre-packed

### UI Frameworks

- [Windi CSS](https://github.com/windicss/windicss) (On-demand [TailwindCSS](https://tailwindcss.com/))
  - [Windi CSS Typography](https://windicss.org/plugins/official/typography.html)

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons) - icons as Vue components

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages)
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- [Pinia](https://pinia.esm.dev)
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components)
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import)
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa)
- [`vite-plugin-windicss`](https://github.com/antfu/vite-plugin-windicss)
- [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md)
  - [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism)
  - [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars)
- [Vue I18n](https://github.com/intlify/vue-i18n-next)
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n)
- [VueUse](https://github.com/antfu/vueuse)
- [`@vueuse/head`](https://github.com/vueuse/head)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Cypress](https://cypress.io/) - E2E Testing
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [`vite-ssg`](https://github.com/antfu/vite-ssg) - Server-side generation
  - [critters](https://github.com/GoogleChromeLabs/critters) - Critical CSS
- [VS Code Extensions](./.vscode/extensions.json) - IDE-like experience on VSCode

## Variations

As this template is strongly opinionated, the following provides a curated list for
community-maintained variations with different preferences and feature sets. Check them
out as well. PR to add yours is also welcome!

### Community

- [vitesse](https://github.com/antfu/vitesse) - The original project by [@antfu](https://github.com/antfu)!
- [vitesse-addons](https://github.com/JohnCampionJr/vitesse-addons) by
[@johncampionjr](https://github.com/johncampionjr) - additional options for integrations,
including [Prettier](https://prettier.io) and [Storybook](https://storybook.js.org)
- [vitesse-ssr-template](https://github.com/frandiox/vitesse-ssr-template)
by [@frandiox](https://github.com/frandiox) - Vitesse with SSR
- [vitespa](https://github.com/ctholho/vitespa) by [@ctholho](https://github.com/ctholho)
- [vitailse](https://github.com/zynth17/vitailse) by [@zynth17](https://github.com/zynth17)
- [vitesse-modernized-chrome-ext](https://github.com/xiaoluoboding/vitesse-modernized-chrome-ext)
by [@xiaoluoboding](https://github.com/xiaoluoboding)

## Try it now

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/antfu/vitesse/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit antfu/vitesse my-vitesse-app
cd my-vitesse-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Rename `name` field in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the favicon in `public`
- [ ] Remove the `.github` folder which contains the funding info
- [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit <http://localhost:4000>

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build:ssg
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way,
and your App will be live in a minute.

## Why

I have created several Vite apps recently. Setting the configs up is kinda the bottleneck
for me to make the ideas simply come true within a very short time.

So I made this starter template for myself to create apps more easily, along with some good
practices that I have learned from making those apps. It's strongly opinionated, but feel
free to tweak it or even maintains your own forks. [(see community maintained variation forks)](#variations)
