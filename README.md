# Astro Bootstrap Icons

Astro Bootstrap Icons is an icon component package which made from [Bootstrap Icons](https://icons.getbootstrap.com/) for using with [Astro](https://astro.build/) project.

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

**Example of** `icons/bootstrap`:

```astro
---
import Bootstrap from 'astro-bootstrap-icons/icons/bootstrap.astro'
---

<Bootstrap />
```

Add any HTML attributes to icon components for modifying.

**Example of** `icons/bootstrap-fill`:

```astro
---
import BootstrapFill from 'astro-bootstrap-icons/icons/bootstrap-fill.astro'
---

<BootstrapFill class="any-class" aria-hidden="true" aria-label="Bootstrap" />
```

**Note**: [Explore icon names for more information](https://icons.getbootstrap.com/sprite/).

## License

[MIT](LICENSE)
