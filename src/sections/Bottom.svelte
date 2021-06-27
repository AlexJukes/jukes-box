<script>
  import Hint from "../components/Hint.svelte";
  import Pointer from "../components/Pointer.svelte";
</script>

<div class="bottom" id="bottom">
  <div class="bottom__last">
    <Pointer pointToId="middle" direction="up" />
  </div>
  <div class="bottom__hint">
    <Hint />
  </div>
</div>

<style>
  .bottom {
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
  }

  .bottom__last {
    display: flex;
    justify-self: center;
    align-self: flex-start;
    grid-area: last;
  }
</style>
