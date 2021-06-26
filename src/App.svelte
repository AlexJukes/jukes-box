<script>
  import Logo from "./components/Logo.svelte";
  import Intro from "./components/Intro.svelte";
  import Hint from "./components/Hint.svelte";
  // import About from "./components/About.svelte";
  import CodeWord from "./components/CodeWord.svelte";
</script>

<div class="homepage">
  <div class="homepage__top">
    <div class="homepage__header">
      <Logo />
    </div>

    <div class="homepage__intro">
      <Intro />
    </div>
  </div>

  <div id="middle" class="homepage__middle">
    <!-- <div class="homepage__main">
      <About />
    </div> -->

    <div class="homepage__code-word">
      <CodeWord />
    </div>
  </div>

  <div class="homepage__bottom">
    <div class="homepage__hint">
      <Hint />
    </div>
  </div>
</div>

<style>
  .homepage {
    display: flex;
    flex-direction: column;
  }

  .homepage__top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      ". header ."
      ". intro .";
    width: 100vw;
    height: 100vh;
    background-color: aliceblue;
  }

  .homepage__header {
    grid-area: header;
    justify-self: center;
  }

  .homepage__intro {
    grid-area: intro;
    text-align: center;
  }

  .homepage__middle {
    width: 100vw;
    height: 100vh;
    background-color: bisque;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .homepage__code-word {
    width: 70%;
  }

  .homepage__bottom {
    width: 100vw;
    height: 100vh;
    background-color: khaki;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /*   
  .homepage {
    display: grid;
    grid-template-columns: minmax(0, 1fr), minmax(400px, 1fr), minmax(0, 1fr);
    grid-template-rows: auto;
    align-items: center;

    grid-template-areas:
      ". header ."
      ". intro ."
      ". main ."
      ".  code-word ."
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
  */
  :global(body) {
    transition: background-color 0.3s;
  }
  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #bfc2c7;
  }
</style>
