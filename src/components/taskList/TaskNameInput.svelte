<script lang="ts">
  export let name = '';
</script>
<nameInput>
<input class="task-name-input" type="text" bind:value={name} placeholder="What are you doing?">
</nameInput>

<style lang="scss">
  @use '../../styles/colors' as colors;
  nameInput {
    width: 100%
  }
  .task-name-input {
    background-color: colors.$sand;
    color: colors.$darkgreen;
    font-family: 'Courier New', Courier, monospace;
    width: 100%;
  }
</style>

