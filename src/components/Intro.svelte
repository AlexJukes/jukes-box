<h1 class="welcome-text">Welcome</h1>

<h2 class="intro-text">I'm Alex</h2>

<div class="pointer-wrapper">
  <div class="chevron-pointer">></div>
</div>

<style>
  .welcome-text {
    font-size: 9em;
    font-weight: normal;
    animation: fadein 2s;
  }

  .intro-text {
    font-size: 4em;
    font-weight: normal;
    animation: fadein 4s;
    animation-delay: 1.5s;
    opacity: 0;
    animation-fill-mode: forwards;
  }

  .pointer-wrapper {
    font-size: 2em;
    animation: floating 3s ease-in-out 1.5s infinite, fadein 3s;
    animation-delay: 1.5s;
    opacity: 0;
    animation-fill-mode: forwards;
  }

  .chevron-pointer {
    transform: rotate(90deg);
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
