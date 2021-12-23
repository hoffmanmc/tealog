<script lang="ts">
  import TaskItem from "./TaskItem.svelte";
  import { storageHelper } from "../../lib/taskStorage";
  const { taskList } = storageHelper;
  </script>

<div class="item-list" on:click>
  <ul>
    {#each $taskList as task }
      <li>
        <TaskItem id={task.id} label={task.label} hours={task.time.hours} minutes={task.time.minutes} seconds={task.time.seconds}></TaskItem>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  @use '../../styles/colors' as colors;
  
  ul {
    list-style-type: none;
    padding-top: 1px;
    display: flex;
    flex-direction: column;
    padding: 0;

  }
  
  li {
    margin: 0;
    vertical-align: text-top;
    display: flex;
    flex-direction: column;
    border-style: dotted;
    border-width: .2px;
    border-radius: 8px;
    border-color: colors.$teal;
  } 
  
</style>
