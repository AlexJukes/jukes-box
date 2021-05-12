<script>
  let hintToggle = false;
  function handleHintClick() {
    hintToggle = !hintToggle;
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 1);
  }
</script>

<h5 class="hint__title">Want a hint?</h5>

<div class="hint__button">
  <button on:click={handleHintClick}>{hintToggle ? "No" : "Yes"}</button>
</div>

{#if hintToggle}
  <p>Try...</p>
  <ul>
    <li><span>cat</span></li>
    <li><span>tech</span></li>
    <li><span>dark</span></li>
  </ul>
{/if}

<style>
  .hint__button {
    display: flex;
    justify-content: center;
  }
</style>
