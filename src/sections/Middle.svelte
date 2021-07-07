<script>
  import About from "../components/About.svelte";
  import CodeWord from "../components/CodeWord.svelte";
  import Pointer from "../components/Pointer.svelte";
</script>

<div id="middle" class="middle">
  <div class="middle__previous">
    <Pointer pointToId="top" direction="up" />
  </div>
  <div class="middle__code-word">
    <CodeWord />
  </div>

  <div class="middle__next">
    <Pointer pointToId="bottom" direction="down" />
  </div>
</div>

<style>
  .middle {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      ". last ."
      "code-word code-word code-word"
      ". next .";
    width: 100vw;
    height: 100vh;
    background-color: bisque;
    transition: background-color 0.3s;
  }

  :global(body.dark-mode .middle) {
    background-color: #07075a;
  }

  .middle__code-word {
    grid-area: code-word;
    display: flex;
    justify-self: center;
    align-self: center;
    width: 50vw;
    flex: 1;
    flex-direction: column;
  }

  .middle__previous {
    position: absolute;
    left: 50.2%;
    top: 2%;
  }

  .middle__next {
    position: absolute;
    left: 50%;
    top: 95%;
  }
</style>
