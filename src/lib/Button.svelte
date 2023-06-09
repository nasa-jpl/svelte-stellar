<svelte:options accessors={true} immutable={true} />

<script lang="ts">
  export let button: HTMLButtonElement | undefined = undefined;
  export let icon: boolean = false;
  export let large: boolean = false;
  export let secondary: boolean = false;
  export let tertiary: boolean = false;
</script>

<button
  bind:this={button}
  class="st-button"
  class:icon
  class:large
  class:secondary
  class:tertiary
  {...$$restProps}
  on:contextmenu
  on:click
  on:focus
  on:mousedown
  on:mouseover
>
  <slot />
</button>
