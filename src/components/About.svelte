<script>
  export let codeWord;
  export let activateDarkMode;
  import Cat from "../components/Cat.svelte";

  function toggleDarkMode() {
    window.document.body.classList.toggle("dark-mode");
    activateDarkMode();
    return null;
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
    {toggleDarkMode() || ""}
  {/if}
  {#if codeWord.toLowerCase() === "light"}
    {toggleDarkMode() || ""}
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
