<script lang="ts">
  import '@nasa-jpl/stellar/css/index.css';
  import '@nasa-jpl/stellar/font/inter/inter.css';
  import SolIcon from '@nasa-jpl/stellar/icons/sol.svg?component';
  import { Button } from '../lib/index.js';
</script>

<main>
  <div class="header">
    <div class="st-typography-displayH1 title">Svelte Stellar</div>
    <div class="st-typography-displayBody">
      A Svelte implementation of the Stellar design system for spacecraft operation tools.
    </div>
  </div>

  <section class="st-card">
    <div class="section-row st-typography-header">Button</div>
    <div class="section-row">
      <Button on:click={() => console.log('Button clicked!')}>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button secondary>Secondary</Button>
      <Button secondary disabled>Secondary Disabled</Button>
      <Button tertiary>Tertiary</Button>
      <Button tertiary disabled>Tertiary Disabled</Button>
      <Button icon><SolIcon /></Button>
      <Button icon disabled><SolIcon /></Button>
    </div>
    <div class="section-row">
      <Button on:click={() => console.log('Button clicked!')} large>Primary</Button>
      <Button large disabled>Disabled</Button>
      <Button large secondary>Secondary</Button>
      <Button large secondary disabled>Secondary Disabled</Button>
      <Button large tertiary>Tertiary</Button>
      <Button large tertiary disabled>Tertiary Disabled</Button>
      <Button large icon><SolIcon /></Button>
      <Button large icon disabled><SolIcon /></Button>
    </div>
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: var(--st-grid-unit2x);
    margin: auto;
    max-width: 1000px;
    padding: 56px;
  }

  .header {
    display: flex;
    flex-direction: column;
    gap: var(--st-grid-unit3x);
  }

  section {
    padding: 1rem;
  }

  .section-row {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 60px;
  }
</style>
