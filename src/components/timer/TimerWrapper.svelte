<script lang="ts">
  import Clock from './Clock.svelte';
  import Button from '../interface/Button.svelte';
  
  let seconds: number = 0;
  let minutes: number = 0;
  let hours: number = 0;
  let taskTime: string;
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
    stopTimer();
  }
  function newTimer(): void {
    taskTime = hours.toString() + ':' + minutes.toString() + ':' + seconds.toString();
    localStorage.setItem('time', taskTime);
    resetTimer();
  }
</script>

<div>
  <Clock elapsedSeconds={seconds} elapsedMinutes={minutes} elapsedHours={hours} />
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
</div>
