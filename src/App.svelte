<script>
	let name = 'world';
	let codeWord = '';
	let isTech = codeWord.toLowerCase()  ===  'tech'
	console.log('code', codeWord)
</script>

<title>Alex Jukes' Site</title>

<h1>Welcome</h1>



<h2>
	I'm Alex
</h2>

<h3>
	How do you know me?
</h3>

<input type="text" bind:value={codeWord}/>

<h3>
	About
</h3>
<ul>
	<li>Human</li>
	{#if codeWord.toLowerCase()  ===  'tech'}
	<li>Software Engineer</li>
	{/if}
</ul>