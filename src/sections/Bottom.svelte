<script>
  import Hint from "../components/Hint.svelte";
  import Pointer from "../components/Pointer.svelte";
</script>

<div class="bottom" id="bottom">
  <div class="bottom__previous">
    <Pointer pointToId="middle" direction="up" />
  </div>
  <div class="bottom__hint">
    <Hint />
  </div>
</div>

<style>
  .bottom {
    position: relative;
    background-color: khaki;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      ". last ."
      ". hint .";
    width: 100vw;
    height: 100vh;
  }

  .bottom__hint {
    display: flex;
    justify-self: center;
    align-self: flex-start;
    grid-area: hint;
    margin-top: 20px;
    position: relative;
    flex-direction: column;
  }

  .bottom__previous {
    position: absolute;
    left: 50.2%;
    top: 2%;
  }
</style>
