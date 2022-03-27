<script>
  import {
    enablePermissionsFor,
    checkIsValidCodeword,
  } from "../scripts/enablePermissionsFor";

  let codeWord = "";
  let isInvalidCodeword = false;

  function handleSubmit() {
    if (checkIsValidCodeword(codeWord)) {
      enablePermissionsFor(codeWord);
      codeWord = "";
      isInvalidCodeword = false;
      return;
    } else {
      isInvalidCodeword = true;
      return;
    }
  }

  function onKeyPress() {
    isInvalidCodeword = false;
  }
</script>

<div id="codeword-section">
  <h3 class="code-word__text">Want to know more?</h3>

  <label for="code-word-input">
    <h4>Just type the word...</h4>
  </label>

  <div class={`code-word__form-wrapper`} class:invalid={isInvalidCodeword}>
    <form class="code-word__form" on:submit|preventDefault={handleSubmit}>
      <input
        type="text"
        id="code-word-input"
        bind:value={codeWord}
        on:keypress={onKeyPress}
        class="code-word__input"
      />
      <button class="code-word__button" type="submit">
        {`${isInvalidCodeword ? "Try again!" : "Have a go!"}`}
      </button>
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

  :global(body.dark-mode .invalid) {
    border-color: darkred;
    border-style: solid;
  }
  .invalid {
    border-color: red;
    border-style: solid;
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
