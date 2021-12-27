<script lang="ts">
  /* tslint:disable-next-line */
  /// <reference path="typings/shims-json.d.ts" />

  import Swatches from '@/assets/swatches.json';
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
  export default class App extends Vue {
    protected swatchesData: string[] = Swatches;
  }
</script>

<template>
  <div
    class="container my-12 md:my-32"
    id="app"
  >
    <ColorPicker :swatches="swatchesData" />
  </div>
</template>
