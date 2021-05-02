<script>
  let codeWord = "";
  let hintToggle = false;
  function handleHintClick() {
    hintToggle = !hintToggle;
  }
  import Cat from "./components/Cat.svelte";
  import Logo from "./components/Logo.svelte";
</script>

<div class="homepage">
  <div class="homepage__header">
    <Logo />
  </div>

  <div class="homepage__main">
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
  </div>

  <div class="homepage__code-input-text">
    <h3>Want to know more?</h3>

    <label for="code-input">
      <h4>Just type the word...</h4>
    </label>
  </div>

  <div class="homepage__code-input">
    <input type="text" id="code-input" bind:value={codeWord} />
  </div>

  <div class="homepage__hint">
    <h5>Want a hint?</h5>

    <button on:click={handleHintClick}>{hintToggle ? "No" : "Yes"}</button>

    {#if hintToggle}
      <p>Try...</p>
      <ul>
        <li><span>cat</span></li>
        <li><span>tech</span></li>
      </ul>
    {/if}
  </div>
</div>

<style>
  .homepage {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;

    grid-template-areas:
      "header . ."
      ". main ."
      ". code-input-text ."
      "code-input code-input code-input"
      ". hint ."
      "footer footer footer";
  }

  .homepage__header {
    grid-area: header;
  }

  .homepage__main {
    grid-area: main;
  }

  .homepage__code-input-text {
    grid-area: code-input-text;
  }

  .homepage__code-input {
    grid-area: code-input;
    justify-self: center;
  }

  .homepage__hint {
    grid-area: hint;
  }
</style>
