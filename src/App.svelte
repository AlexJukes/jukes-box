<script>
  let codeWord = "";
  let isDarkMode = false;
  function activateDarkMode() {
    isDarkMode = true;
  }
  import Logo from "./components/Logo.svelte";
  import Hint from "./components/Hint.svelte";
  import About from "./components/About.svelte";
</script>

<div class="homepage">
  <div class="homepage__header">
    <Logo {isDarkMode} />
  </div>

  <div class="homepage__intro">
    <h1>Welcome</h1>

    <h2>I'm Alex</h2>
  </div>

  <div class="homepage__main">
    <About {codeWord} {activateDarkMode} />
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
    <Hint />
  </div>
</div>

<style>
  .homepage {
    display: grid;
    grid-template-columns: minmax(0, 1fr), minmax(400px, 1fr), minmax(0, 1fr);
    grid-template-rows: auto;
    align-items: center;

    grid-template-areas:
      ". header ."
      ". intro ."
      ". main ."
      ". code-input-text ."
      "code-input code-input code-input"
      ". hint ."
      "footer footer footer";
  }

  .homepage__header {
    grid-area: header;
    justify-self: center;
  }

  .homepage__intro {
    grid-area: intro;
    text-align: center;
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
