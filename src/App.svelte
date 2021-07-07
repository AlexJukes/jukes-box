<script>
  import { permissions } from "./stores";
  import { enableDarkMode, enableLightMode } from "./scripts/toggleDarkMode";

  import Top from "./sections/Top.svelte";
  import Middle from "./sections/Middle.svelte";
  import Bottom from "./sections/Bottom.svelte";
</script>

<div class="homepage">
  <Top />

  <Middle />

  <Bottom />

  {#if $permissions.includes("dark")}
    {enableDarkMode()}
  {/if}
  {#if $permissions.includes("light")}
    {enableLightMode()}
  {/if}
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
    background-color: #000000;
    color: #bfc2c7;
  }
</style>
