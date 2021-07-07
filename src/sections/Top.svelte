<script>
  import Logo from "../components/Logo.svelte";
  import Intro from "../components/Intro.svelte";
  import Pointer from "../components/Pointer.svelte";
</script>

<div class="top" id="top">
  <div class="top__header">
    <Logo />
  </div>

  <div class="top__intro">
    <Intro />
  </div>

  <div class="top__next">
    <Pointer pointToId="middle" />
  </div>
</div>

<style>
  .top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      ". header ."
      ". intro ."
      ". next .";
    width: 100vw;
    height: 100vh;
    background-color: aliceblue;
    transition: background-color 0.3s;
  }

  :global(body.dark-mode .top) {
    background-color: #000000;
  }

  .top__header {
    grid-area: header;
    justify-self: center;
  }

  .top__intro {
    grid-area: intro;
    text-align: center;
  }

  .top__next {
    position: absolute;
    left: 50%;
    top: 95%;
  }
</style>
