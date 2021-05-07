<script>
  export let codeWord;
  import { darkMode } from "../stores";
  import { toggleDarkMode } from "../toggleDarkMode";
  import Cat from "../components/Cat.svelte";

  let isDarkMode;

  darkMode.subscribe((value) => {
    isDarkMode = value;
  });

  function handleDarkMode(isDarkMode) {
    if (!isDarkMode) {
      toggleDarkMode();
    }
    return "";
  }
  function handleLightMode(isDarkMode) {
    if (isDarkMode) {
      toggleDarkMode();
    }
    return "";
  }
</script>

<h3>About</h3>
<ul>
  <li>Human</li>
  {#if codeWord.toLowerCase() === "tech"}
    <li>
      <a
        href="https://github.com/AlexJukes"
        target="_blank"
        rel="noopener noreferrer">Software Engineer</a
      >
    </li>
  {/if}
  {#if codeWord.toLowerCase() === "cat"}
    <Cat image={"bed"} />
  {/if}
  {#if codeWord.toLowerCase() === "lobus"}
    <Cat image={"lobus"} />
  {/if}
  {#if codeWord.toLowerCase() === "dark"}
    {handleDarkMode(isDarkMode)}
  {/if}
  {#if codeWord.toLowerCase() === "light"}
    {handleLightMode(isDarkMode)}
  {/if}
</ul>

<style>
  :global(body) {
    transition: background-color 0.3s;
  }
  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #bfc2c7;
  }
</style>
