<script>
  let codeWord = "";
  import Logo from "./components/Logo.svelte";
  import Hint from "./components/Hint.svelte";
  import About from "./components/About.svelte";
  import CodeWord from "./components/CodeWord.svelte";
</script>

<div class="homepage">
  <div class="homepage__header">
    <Logo />
  </div>

  <div class="homepage__intro">
    <h1>Welcome</h1>

    <h2>I'm Alex</h2>
  </div>

  <div class="homepage__main">
    <About {codeWord} />
  </div>

  <div class="homepage__code-word">
    <CodeWord />
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
      "code-word  code-word code-word "
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

  .homepage__code-word {
    grid-area: code-word;
  }

  .homepage__hint {
    grid-area: hint;
  }
</style>
