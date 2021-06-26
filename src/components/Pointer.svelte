<script>
  export let pointToId;
</script>

<div class="pointer">
  <div class="pointer__wrapper">
    <a class="pointer__anchor" href={`#${pointToId}`}
      ><span class="pointer__chevron">></span></a
    >
  </div>
</div>

<style>
  .pointer {
    font-size: 2em;
    animation: floating 3s ease-in-out 1.5s infinite, fadein 3s;
    animation-delay: 2.5s;
    opacity: 0;
    animation-fill-mode: forwards;
    transform: rotate(90deg);
  }

  .pointer__wrapper {
    transform: rotate(90deg);
  }

  .pointer__anchor {
    text-decoration: none;
  }

  .pointer__chevron {
    text-decoration: none;
    color: black;
  }

  @keyframes floating {
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
