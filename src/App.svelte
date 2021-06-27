<script>
  import Top from "./sections/Top.svelte";
  import Middle from "./sections/Middle.svelte";
  import Bottom from "./sections/Bottom.svelte";
</script>

<div class="homepage">
  <Top />

  <Middle />

  <Bottom />
</div>

<style>
  .homepage {
    display: flex;
    flex-direction: column;
  }

  :global(body) {
    transition: background-color 0.3s;
  }
  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #bfc2c7;
  }
</style>
