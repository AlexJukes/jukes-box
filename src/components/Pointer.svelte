<script>
  export let pointToId;
  export let direction = "down";
</script>

<div class={`pointer pointer--${direction}`}>
  <div class={`pointer__wrapper--${direction}`}>
    <a class="pointer__anchor" href={`#${pointToId}`}
      ><span class="pointer__chevron">></span></a
    >
  </div>
</div>

<style>
  .pointer {
    font-size: 2em;
  }

  .pointer--up {
    animation: floating-down-up 3s ease-in-out 1.5s infinite, fadein 3s;
    animation-delay: 2.5s;
    opacity: 0;
    animation-fill-mode: forwards;
  }

  .pointer--down {
    animation: floating-up-down 3s ease-in-out 1.5s infinite, fadein 3s;
    opacity: 0;
    animation-fill-mode: forwards;
    animation-delay: 2.5s;
  }
  .pointer__wrapper--down {
    transform: rotate(90deg);
  }

  .pointer__wrapper--up {
    transform: rotate(270deg);
  }

  .pointer__anchor {
    text-decoration: none;
  }

  .pointer__chevron {
    text-decoration: none;
    color: black;
  }

  :global(body.dark-mode .pointer__chevron) {
    color: #bfc2c7;
  }

  @keyframes floating-up-down {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, -15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }

  @keyframes floating-down-up {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
