<script>
  import { getPermissionsFor } from "../scripts/getPermissionsFor";

  let codeWord = "";
</script>

<div class="code-word__text">
  <h3>Want to know more?</h3>

  <label for="code-word-input">
    <h4>Just type the word...</h4>
  </label>
</div>

<div class="code-word__input">
  <input type="text" id="code-word-input" bind:value={codeWord} />
  <input
    type="button"
    on:click={() => getPermissionsFor(codeWord)}
    value="Have a go"
  />
</div>

<style>
  .code-word__text {
    grid-area: code-input-text;
  }

  .code-word__input {
    grid-area: code-input;
    justify-self: center;
  }
</style>
