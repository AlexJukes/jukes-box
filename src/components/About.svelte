<script>
  export let codeWord;
  import { darkMode, permissions } from "../stores";
  import { toggleDarkMode } from "../scripts/toggleDarkMode";
  import Cat from "../components/Cat.svelte";

  let isDarkMode;
  let userPermissions;
  console.log("userPermissions", userPermissions);
  console.log("$", $permissions);

  darkMode.subscribe((value) => {
    isDarkMode = value;
  });

  permissions.subscribe((value) => {
    console.log("value", value);

    userPermissions = value;
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
  {#if $permissions.includes("tech")}
    <li>
      <a
        href="https://github.com/AlexJukes"
        target="_blank"
        rel="noopener noreferrer">Software Engineer</a
      >
    </li>
  {/if}
  {#if $permissions.includes("cat")}
    <Cat image={"bed"} />
  {/if}
  {#if $permissions.includes("lobus")}
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
