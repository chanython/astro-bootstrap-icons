# Astro Bootstrap Icons

![NPM Version](https://img.shields.io/npm/v/astro-bootstrap-icons)
![NPM Downloads](https://img.shields.io/npm/d18m/astro-bootstrap-icons)
![NPM License](https://img.shields.io/npm/l/astro-bootstrap-icons)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/chanython/astro-bootstrap-icons/node.js.yml)

Astro Bootstrap Icons is an icon component package which made from [Bootstrap Icons](https://icons.getbootstrap.com/) for using with [Astro](https://astro.build/) project.

## Changelog

[See the latest updates](CHANGELOG.md).

## Installation

Install `astro-bootstrap-icons` follow your package manager.

**NPM**:

```sh
npm install astro-bootstrap-icons
```

**Yarn**:

```sh
yarn add astro-bootstrap-icons
```

**PNPM**:

```sh
pnpm add astro-bootstrap-icons
```

**Bun**:

```sh
bun add astro-bootstrap-icons
```

## Usage

Import icon components to your project without any configuration.

**Notes**:

- Recommend to add the prefix "Bi" before the icon name for individual imports, e.g., `<Bootstrap />` to `<BiBootstrap />`.
- Named destructuring imports must add the prefix "Bi" and the icon name in Pascal case.

### Import an icon component as individual

**Example of** `bootstrap`:

```astro
---
import BiBootstrap from 'astro-bootstrap-icons/bootstrap'
---

<BiBootstrap />
```

**When compiled**:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
  <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"/>
</svg>
```

### Import icon components as named destructuring

**Example of** `0-circle` **and** `0-circle-fill`:

```astro
---
import { Bi0Circle, Bi0CircleFill } from 'astro-bootstrap-icons'
---

<Bi0Circle />
<Bi0CircleFill />
```

**When compiled**:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.012 4.158c1.858 0 2.96-1.582 2.96-3.99V7.84c0-2.426-1.079-3.996-2.936-3.996-1.864 0-2.965 1.588-2.965 3.996v.328c0 2.42 1.09 3.99 2.941 3.99"/>
</svg>
```

### Add any HTML attributes to icon components

**Example of** `bootstrap-fill`:

```astro
---
import BiBootstrapFill from 'astro-bootstrap-icons/bootstrap-fill'
---

<BiBootstrapFill class="any-class" aria-hidden="true" aria-label="Bootstrap" />
```

**When compiled**:

```xml
<svg class="any-class" aria-hidden="true" aria-label="Bootstrap" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z"/>
  <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z"/>
</svg>
```

## Icons

[Explore icon names for more information](https://icons.getbootstrap.com/sprite/).

## License

[MIT](LICENSE)
