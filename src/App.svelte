<script lang="ts">
 import TimerWrapper from "./components/timer/TimerWrapper.svelte"
</script>

<main>
	<TimerWrapper/>
</main>

<style lang="scss">
  @use './styles/colors' as colors;
  main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
    margin: 0 auto;
    background-color: colors.$mint;
	}

  TimerWrapper {
    
  }

  :global(body) {
    background-color: colors.$mint;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
  }


</style>
