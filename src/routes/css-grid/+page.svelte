<script>
  import { CssGrid, CssGridGutter } from '@nasa-jpl/svelte-css-grid';
</script>

<CssGrid columns="1fr 5px 1fr 5px 1fr">
  <div />

  <CssGridGutter track={1} type="column" />

  <CssGrid rows="1fr 5px 1fr">
    <div />
    <CssGridGutter track={1} type="row" />
    <div />
  </CssGrid>

  <CssGridGutter track={3} type="column" />

  <div />
</CssGrid>
