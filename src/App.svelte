<script>
  let codeWord = "";
  let hintToggle = false;
  function handleHintClick() {
    hintToggle = !hintToggle;
  }
  import Cat from "./components/Cat.svelte";
  import Logo from "./components/Logo.svelte";
</script>

<Logo />

<h1>Welcome</h1>

<h2>I'm Alex</h2>

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
</ul>

<h3>Want to know more?</h3>

<h4>
  Just say the word...
  <input type="text" bind:value={codeWord} />
</h4>

<h5>Want a hint?</h5>

<button on:click={handleHintClick}>{hintToggle ? "No" : "Yes"}</button>

{#if hintToggle}
  <p>Try...</p>
  <ul>
    <li><span>cat</span></li>
    <li><span>tech</span></li>
  </ul>
{/if}
