<script>
  export let image;
  let imageMap = {
    bed: {
      src:  '/bed.jpeg',
      alt: 'A black and white cat curled up on a bed'
    },
    lobus: {
      src:  '/lobus.png',
      alt: "A black and white cat sitting on Alex's shoulders while he works"
    }
  };
</script>

<style>
	img {
		width: 30%;
	}
</style>

<li>Owner of this bundle of fur</li>
<img src={imageMap[image].src} alt={imageMap[image].alt}/>