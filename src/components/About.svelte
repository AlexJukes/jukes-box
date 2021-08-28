<script>
  import { permissions } from "../stores";
  import Cat from "../components/Cat.svelte";
</script>

<h3 class>About</h3>
<ul>
  <li>Human</li>
  {#if $permissions.includes("tech")}
    <li>
      <a
        href="https://github.com/AlexJukes"
        target="_blank"
        rel="noopener noreferrer">Software Engineer</a
      >
    </li>
  {/if}
  {#if $permissions.includes("cat")}
    <Cat image={"bed"} />
  {/if}
  {#if $permissions.includes("lobus")}
    <Cat image={"lobus"} />
  {/if}
</ul>

<style>
</style>
