<script>
  let hintToggle = false;
  function handleHintClick() {
    hintToggle = !hintToggle;
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 1);
  }
</script>

<div class="hint">
  <h5 class="hint__title">Want a hint?</h5>

  <div class="hint__button">
    <button on:click={handleHintClick}>{hintToggle ? "No" : "Yes"}</button>
  </div>

  {#if hintToggle}
    <div class="hint__answers">
      <p>Try...</p>
      <ul>
        <li><span>cat</span></li>
        <li><span>tech</span></li>
        <li><span>dark</span></li>
      </ul>
    </div>
  {/if}
</div>

<style>
  .hint {
    position: relative;
  }
  .hint__button {
    display: flex;
    justify-content: center;
  }

  .hint__answers {
    position: absolute;
  }
</style>
