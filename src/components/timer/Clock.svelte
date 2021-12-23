<script lang="ts">
  // Prop
  export let elapsedSeconds: number = 0;
  export let elapsedMinutes: number = 0;
  export let elapsedHours: number = 0;
</script>

<div class="clock">
  {elapsedHours}:{elapsedMinutes}:{elapsedSeconds}
</div>

<style lang="scss">
  @use '../../styles/colors' as colors;
  .clock {
    font-family: 'Courier New', Courier, monospace;
    font-size: 50px;
    color: colors.$moss;
    padding-top: 15px;
    padding-bottom: 5px;
  }

</style>
