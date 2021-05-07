<script>
  import { darkMode } from '../stores';
  let isDarkMode;

  darkMode.subscribe((value) => {
    isDarkMode = value;
  });
</script>



<div class="logo-wrapper">
  <a href="https://alexjukes.com">
    {#if isDarkMode}
      <img
        class="homepage-logo"
        src="/logos/signature-white.svg"
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
    width: 250px;
    height: 250px;
    transition: visible 0.3s;
  }

  .logo-wrapper {
    display: flex;
  }
</style>
