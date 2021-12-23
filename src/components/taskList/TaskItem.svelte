<script lang="ts">
  import { storageHelper } from "../../lib/taskStorage";
  import Button from "../interface/Button.svelte";
  export let id: string;
  export let label: string;
  export let hours: number;
  export let minutes: number;
  export let seconds: number;

  function deleteTask(id: string): void {
    storageHelper.deleteTask(id);
  };
</script>

<div class="task-item" on:click>
  <div>{label || 'Task'} - {hours}h {minutes}m {seconds}s</div> 
  <div>
    <Button on:click={() => deleteTask(id)}>Delete</Button>
  </div>
</div>

<style lang="scss">
  @use '../../styles/colors' as colors;
  .task-item {
    font-family: 'Courier New', Courier, monospace;
    color: colors.$moss;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
  }
  
</style>
