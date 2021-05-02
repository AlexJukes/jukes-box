<script>
  let hintToggle = false;
  function handleHintClick() {
    hintToggle = !hintToggle;
  }
</script>

<h5>Want a hint?</h5>

<div class="hint__button">
  <button on:click={handleHintClick}>{hintToggle ? "No" : "Yes"}</button>
</div>

{#if hintToggle}
  <p>Try...</p>
  <ul>
    <li><span>cat</span></li>
    <li><span>tech</span></li>
  </ul>
{/if}

<style>
  .hint__button {
    display: flex;
    justify-content: center;
  }
</style>
