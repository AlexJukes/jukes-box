<script>
	let codeWord = '';
</script>

<h1>Welcome</h1>



<h2>
	I'm Alex
</h2>

<h3>
	About
</h3>
<ul>
	<li>Human</li>
	{#if codeWord.toLowerCase()  ===  'tech'}
		<li><a href="https://github.com/AlexJukes" target="_blank" rel="noopener noreferrer">Software Engineer</a></li>
	{/if}
</ul>


<h3>
	Want to know more?
</h3>

<h4>
	Just say the word...
	<input type="text" bind:value={codeWord}/>
</h4>
