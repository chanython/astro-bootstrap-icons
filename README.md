# Astro Bootstrap Icons

[![NPM Version](https://img.shields.io/npm/v/astro-bootstrap-icons)](https://www.npmjs.com/package/astro-bootstrap-icons)
[![NPM Downloads](https://img.shields.io/npm/d18m/astro-bootstrap-icons)](https://www.npmjs.com/package/astro-bootstrap-icons)
[![NPM License](https://img.shields.io/npm/l/astro-bootstrap-icons)](LICENSE)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/chanython/astro-bootstrap-icons/node.js.yml)](https://github.com/chanython/astro-bootstrap-icons/actions/workflows/node.js.yml)
[![Bootstrap Icons](https://img.shields.io/badge/bootstrap_icons-v1.13.1-purple)](https://blog.getbootstrap.com/2025/05/09/bootstrap-icons-1-12-1-13/)

Astro Bootstrap Icons is an icon component package which made from [Bootstrap Icons](https://icons.getbootstrap.com/) for using with [Astro](https://astro.build/) project.

## Changelog

[See the latest updates](CHANGELOG.md).

## Installation

Install `astro-bootstrap-icons` follow your package manager.

NPM:

```sh
npm install astro-bootstrap-icons
```

Yarn:

```sh
yarn add astro-bootstrap-icons
```

PNPM:

```sh
pnpm add astro-bootstrap-icons
```

Bun:

```sh
bun add astro-bootstrap-icons
```

## Usage

Import icon components to your project without any configuration.

### Guides

- Icon component names being imported should have the prefix "Bi" (whatever) and the icon name in Pascal case, e.g., `<BiAlarmFill />`, `<BiBootstrap />`, `<BiToggleOn />`, etc.
- Importing path follow with package and icon names in Kebab case, e.g., `astro-bootstrap-icons/alarm-fill`.
- There are some icons that start with a digit that are against naming rules for JavaScript and TypeScript; add the prefix "Bi" (whatever) before the icon name, e.g., `<0Circle />` to `<Bi0Circle />`.

### Import an icon component

Example of `bootstrap`:

```astro
---
import BiBootstrap from 'astro-bootstrap-icons/bootstrap'
---

<BiBootstrap />
```

When compiled:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
  <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"/>
</svg>
```

### Add any HTML attributes

Example of `bootstrap-fill`:

```astro
---
import BiBootstrapFill from 'astro-bootstrap-icons/bootstrap-fill'
---

<BiBootstrapFill class="any-class" aria-hidden="true" aria-label="Bootstrap" />
```

When compiled:

```xml
<svg class="any-class" aria-hidden="true" aria-label="Bootstrap" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z"/>
  <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z"/>
</svg>
```

### Use with the Bootstrap framework

Astro Bootstrap Icons package differs from the original version by removing the class named `bi`, as well as the prefixed `bi-` with icon names like `bi-bootstrap`, so that the results are not tied to Bootstrap's predefined styles by those classes. If you want to use Astro Bootstrap Icons with the Bootstrap framework, just add `bi` in the class attribute.

## Icons

[Explore icon names for more information](https://icons.getbootstrap.com/sprite/).

## Technical information

Icon customization works from Astro props, meaning that any HTML attributes can be added or overridden.

Code sample on `dist/[icon-name].astro`:

```astro
---
import type { HTMLAttributes } from 'astro/types'

export interface Props extends HTMLAttributes<'svg'> {
  xmlns?: string | null
  width?: string | number | null
  height?: string | number | null
  fill?: string | null
  viewBox?: string | null
}

const { xmlns, width, height, fill, viewBox, ...props }: Props = Astro.props
---

<svg {...props} xmlns={xmlns ?? "http://www.w3.org/2000/svg"} width={width ?? 16} height={height ?? 16} fill={fill ?? "currentColor"} viewBox={viewBox ?? "0 0 16 16"}>
  {/* paths */}
</svg>
```

## License

[MIT](LICENSE)
