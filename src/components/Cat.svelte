<script>
  export let image;
  let imageMap = {
    bed: {
      src: "/bed.jpeg",
      alt: "A black and white cat curled up on a bed",
    },
    lobus: {
      src: "/lobus.png",
      alt: "A black and white cat sitting on Alex's shoulders while he works",
    },
  };
</script>

<li>Owner of this bundle of fur</li>
<img src={imageMap[image].src} alt={imageMap[image].alt} />

<style>
  img {
    max-width: 30%;
    height: auto;
  }
</style>
