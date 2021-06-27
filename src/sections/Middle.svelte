<script>
  import CodeWord from "../components/CodeWord.svelte";
  import Pointer from "../components/Pointer.svelte";
</script>

<div id="middle" class="middle">
  <div class="middle__last">
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      ". last ."
      "code-word code-word code-word"
      ". next .";
    width: 100vw;
    height: 100vh;
    background-color: bisque;
  }

  .middle__code-word {
    grid-area: code-word;
    display: flex;
    justify-self: center;
    align-self: center;
  }

  .middle__last {
    display: flex;
    justify-self: center;
    align-self: flex-start;
    grid-area: last;
    margin-top: 20px;
  }

  .middle__next {
    display: flex;
    justify-self: center;
    align-self: end;
    grid-area: next;
  }
</style>
