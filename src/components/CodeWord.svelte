<script>
  import {
    enablePermissionsFor,
    checkIsValidCodeword,
  } from "../scripts/enablePermissionsFor";

  const ENTER_KEY = 13;

  let codeWord = "";
  let isInvalidCodeword = false;

  function handleSubmit() {
    if (checkIsValidCodeword(codeWord)) {
      enablePermissionsFor(codeWord);
      codeWord = "";
      isInvalidCodeword = false;
      console.log("isInvalidCodeword no", isInvalidCodeword);

      return;
    } else {
      console.log("isInvalidCodeword yes", isInvalidCodeword);
      isInvalidCodeword = true;
      return;
    }
  }

  function onKeyPress(event) {
    console.log("isInvalidCodeword key", isInvalidCodeword);

    isInvalidCodeword = false;
    if (event.charCode === ENTER_KEY) handleSubmit();
  }
</script>

<div id="codeword-section">
  <h3 class="code-word__text">Want to know more?</h3>

  <label for="code-word-input">
    <h4>Just type the word...</h4>
  </label>

  {console.log("isInvalidCodeword", isInvalidCodeword)}

  <div class={`code-word__form-wrapper`} class:invalid={isInvalidCodeword}>
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

  .code-word__input {
    flex: 2;
  }

  @keyframes shake {
    8%,
    41% {
      -webkit-transform: translateX(-10px);
    }
    25%,
    58% {
      -webkit-transform: translateX(10px);
    }
    75% {
      -webkit-transform: translateX(-5px);
    }
    92% {
      -webkit-transform: translateX(5px);
    }
    0%,
    100% {
      -webkit-transform: translateX(0);
    }
  }
  .invalid {
    border-color: red;
    border-style: solid;
    /* also need animation and -moz-animation */
    animation: shake 0.5s;
  }

  .code-word__button {
    flex: 1;
  }

  .code-word__form {
    grid-area: code-input;
    justify-self: center;
  }
</style>
