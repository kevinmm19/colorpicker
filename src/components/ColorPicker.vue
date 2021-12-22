<script lang="ts">
  /// <reference path="../shims-svg.d.ts" />

  import { 
    Component,
    Prop,
    Vue,
  } from 'vue-property-decorator';
  import {
    hex,
    hsl,
    rgb,
  } from '@/utils/color';
  import CheckIcon from '@/assets/check.svg';

  @Component({
    components: {
      CheckIcon,
    },
  })
  export default class ColorPicker extends Vue {
    @Prop({ default: [] })
    swatches: Array<string>;

    colorModes: Array<string> = [
      `hex`,
      `hsl`,
      `rgb`
    ];
    
    activeSwatchIndex: number = 0;
    activeColorModeIndex: number = 0;

    get activeSwatchValue(): string {
      return this.swatches[this.activeSwatchIndex];
    };

    get activeColorModeValue(): string {
      return this.colorModes[this.activeColorModeIndex];
    };

    get activeCode(): string {
      switch (this.activeColorModeValue) {
        case `hsl`:
          return hsl(this.activeSwatchValue);
        case `rgb`:
          return rgb(this.activeSwatchValue);
        default:
          return hex(this.activeSwatchValue);;
      }
    };
  }
</script>

<template>
  <div :class="$style.root">
    <ul :class="$style.swatches">
      <li
        :key="index"
        v-for="(swatch, index) in swatches"
        :class="[
          $style.swatch,
          { active: activeSwatchIndex === index }
        ]"
        :style="{ backgroundColor: `#${swatch}` }"
        qa-ref="swatch"
        @click="activeSwatchIndex = index"
      >
        <CheckIcon />
      </li>
    </ul>

    <ul :class="$style.colorModes">
      <li
        :key="index"
        v-for="(colorMode, index) in colorModes"
      >
        <button
          :class="[
            $style.colorMode,
            { active: activeColorModeIndex === index }
          ]"
          qa-ref="color-mode"
          @click="activeColorModeIndex = index"
        >
          {{ colorMode }}
        </button>
      </li>
    </ul>

    <p
      :class="$style.colorCode"
      qa-ref="color-code"
    >
      {{ activeCode }}
    </p>
  </div>
</template>

<style
  lang="scss"
  module
>

</style>