<script lang="ts">
  // Prop
  export let elapsedSeconds: number = 0;
  export let elapsedMinutes: number = 0;
  export let elapsedHours: number = 0;
</script>

<div>
  {elapsedHours}:{elapsedMinutes}:{elapsedSeconds}
</div>
