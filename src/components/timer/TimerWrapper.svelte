<script lang="ts">
  import { v4 } from 'uuid'; 
  import Clock from './Clock.svelte';
  import Button from '../interface/Button.svelte';
  import TaskNameInput from '../taskList/TaskNameInput.svelte';
  import { storageHelper } from '../../lib/taskStorage';
  import type { Task, TaskTime } from '../../types/tasks';
  import TaskItemDisplay from '../taskList/TaskItemDisplay.svelte';
  
  let seconds: number = 0;
  let minutes: number = 0;
  let hours: number = 0;
  let taskName: string = '';
  let intervalID: number;

  function addSecond(): void {
      seconds += 1;
      if (seconds >= 60) 
      {
          minutes += 1;
          seconds = 0;
      }
      if (minutes >= 60)
      {
          hours += 1;
          minutes = 0;
      }
  }

  function startTimer(): void {
    if (intervalID) return;
    intervalID = setInterval(addSecond, 1000);
  }

  function stopTimer(): void {
    if (!intervalID) return;
    clearInterval(intervalID);
    intervalID = 0;
  }

  function resetTimer(): void {
    seconds = minutes = hours = 0;
    taskName = '';
    stopTimer();
  }
  
  function clearAllTasks(): void {
    storageHelper.clearTaskList();
  }

  function newTimer(): void {
    let taskTime: TaskTime = {
      hours: hours,
      minutes: minutes,
      seconds: seconds
      };
    let taskLabel = taskName;
    let newTask: Task = {
      id: v4(),
      label: taskLabel,
      time: taskTime
    };  
    storageHelper.addTask(newTask);
    resetTimer();
  }

</script>
<div class="timerWrapper">
<div>
  <Clock elapsedSeconds={seconds} elapsedMinutes={minutes} elapsedHours={hours} />
  <div class="timer-header">
    <div class="task-input">
      <TaskNameInput bind:name={taskName} />
    </div>
    <div class="button-section">
    <Button on:click={startTimer} >
      Start
    </Button>
    <Button on:click={stopTimer} >
      Stop
    </Button>
    <Button on:click={resetTimer} >
      Reset
    </Button>
    <Button on:click={newTimer}>
      New
    </Button>
    <Button on:click={clearAllTasks}>
      Clear All
    </Button>
    </div>
  </div>  
</div>
<div>
  <TaskItemDisplay>
  </TaskItemDisplay>
</div>
</div>

<style lang="scss"> 
  @use '../../styles/colors' as colors;
  .timerWrapper {
    background-color: colors.$mint;
    width: 500px;
    margin: auto;
    flex-direction: column;
  }

  .timer-header {
    width: 100%;
  }

  .task-input {
    display: flex;
    width: 68%;
    padding-left: 78px;
  }
  
  .button-section {
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-top: 5px;
  }

  </style>  
