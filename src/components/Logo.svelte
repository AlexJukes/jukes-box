<script>
  export let isDarkMode;
</script>

<div class="logo-wrapper">
  <a href="https://alexjukes.com">
    {#if isDarkMode}
      <img
        class="homepage-logo"
        src="/logos/signature-logo-white.png"
        alt="Alex Jukes' homepage"
      />
    {/if}
    {#if !isDarkMode}
      <img
        class="homepage-logo"
        src="/logos/signature-black.svg"
        alt="Alex Jukes' homepage"
      />
    {/if}
  </a>
</div>

<style>
  .homepage-logo {
    max-width: 250px;
  }

  .logo-wrapper {
    display: flex;
  }
</style>
