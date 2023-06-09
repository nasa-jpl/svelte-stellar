[![npm (scoped)](https://img.shields.io/npm/v/@nasa-jpl/svelte-stellar)](https://www.npmjs.com/package/@nasa-jpl/svelte-stellar)

# @nasa-jpl/svelte-stellar

Svelte components for the [Stellar](https://github.com/nasa-jpl/stellar) design system.

## Installation

```sh
npm install @nasa-jpl/svelte-stellar @nasa-jpl/stellar --save
```

## Usage

More detailed usage examples can be found on the [examples page](https://nasa-jpl.github.io/svelte-stellar/) ([implementation](https://github.com/nasa-jpl/svelte-stellar/blob/develop/src/routes/%2Bpage.svelte)).

Before usage make sure you import the base Stellar CSS files. For example if you need everything:

```svelte
<script lang="ts">
  import '@nasa-jpl/stellar/css/index.css';
  import '@nasa-jpl/stellar/font/inter/inter.css';
  // ...
</script>
```

### Button

```svelte
<script lang="ts">
  import { Button } from '../lib/index.js';
</script>

<Button>Primary</Button>
```
