<script lang="ts">
</script>

<button on:click>
  <slot></slot>
</button>

<style lang="scss">
  @use '../../styles/colors' as colors;
  button {
    font-family: Courier;
    font-weight: bold;
    line-height: 15px;
    padding-top: 10px;
    color: colors.$moss;
    border: none;
    background-color: colors.$teal;
    margin: 0;
  }
</style>
