<script>
  import { enablePermissionsFor } from "../scripts/enablePermissionsFor";

  const ENTER_KEY = 13;

  let codeWord = "";

  function handleSubmit() {
    enablePermissionsFor(codeWord);
    codeWord = "";
  }

  function onKeyPress(event) {
    if (event.charCode === ENTER_KEY) handleSubmit();
  }
</script>

<div id="codeword-section">
  <h3 class="code-word__text">Want to know more?</h3>

  <label for="code-word-input">
    <h4>Just type the word...</h4>
  </label>

  <form class="code-word__form" on:submit|preventDefault={handleSubmit}>
    <input
      type="text"
      id="code-word-input"
      bind:value={codeWord}
      on:keypress={onKeyPress}
      class="code-word__input"
    />
    <button class="code-word__button" type="submit"> Have a go! </button>
  </form>
</div>

<style>
  .code-word__form {
    grid-area: code-input-text;
    display: flex;
    flex-wrap: wrap;
  }

  .code-word__input {
    flex: 2;
  }

  .code-word__button {
    flex: 1;
  }

  .code-word__form {
    grid-area: code-input;
    justify-self: center;
  }
</style>
