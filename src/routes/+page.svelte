<script lang="ts">
  import '@nasa-jpl/stellar/css/index.css';
  import '@nasa-jpl/stellar/font/inter/inter.css';
  import { Button } from '../lib/index.js';
</script>

<main>
  <section>
    <div class="st-typography-displayH1">Svelte Stellar</div>
  </section>

  <section class="st-card">
    <div class="st-typography-header">Button</div>
    <div>
      <Button on:click={() => console.log('Button clicked!')}>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button secondary>Secondary</Button>
      <Button secondary disabled>Secondary Disabled</Button>
      <Button tertiary>Tertiary</Button>
      <Button tertiary disabled>Tertiary Disabled</Button>
    </div>
  </section>
</main>

<style>
  main,
  section {
    padding: 10px;
  }
</style>
