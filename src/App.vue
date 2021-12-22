<script lang="ts">
  import { 
    Component,
    Vue,
  } from 'vue-property-decorator';
  import ColorPicker from './components/ColorPicker.vue';

  @Component({
    components: {
      ColorPicker,
    },
  })
  export default class App extends Vue {}
</script>

<template>
  <div
    :class="$style.root"
    id="app"
  >
    <ColorPicker />
  </div>
</template>

<style
  lang="scss"
  module
>
  .root {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
