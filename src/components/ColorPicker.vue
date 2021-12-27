<script lang="ts">
  /* tslint:disable-next-line */
  /// <reference path="../typings/shims-svg.d.ts" />

  import CheckIcon from '@/assets/check.svg';
  import {
    Component,
    Prop,
    Vue,
  } from 'vue-property-decorator';
  import {
    hex,
    hsl,
    rgb,
  } from '../utils/color';

  @Component({
    components: {
      CheckIcon,
    },
  })
  export default class ColorPicker extends Vue {
    @Prop({ default: [] })
    private swatches!: string[];

    private colorModes: string[] = [
      `hex`,
      `hsl`,
      `rgb`,
    ];

    private activeSwatchIndex: number = 0;

    private activeColorModeIndex: number = 0;

    get activeCode(): string {
      const activeSwatch = this.swatches[this.activeSwatchIndex];
      const activeMode = this.colorModes[this.activeColorModeIndex];

      switch (activeMode) {
        case `hsl`:
          return hsl(activeSwatch);
        case `rgb`:
          return rgb(activeSwatch);
        default:
          return hex(activeSwatch);
      }
    }
  }
</script>

<template>
  <div
    :class="$style.root"
    class="container py-4 bg-gray-200 border border-gray-300 shadow-xl rounded-2xl"
  >
    <ul
      :class="$style.swatches"
      class="flex flex-wrap flex-row justify-between bg-gray-200"
    >
      <li
        :key="index"
        v-for="(swatch, index) in swatches"
        :class="[
          $style.swatch,
          { active: activeSwatchIndex === index },
          { [$style.active]: activeSwatchIndex === index }
        ]"
        :style="{ backgroundColor: `#${swatch}` }"
        class="h-12 w-12 mb-2 rounded-xl"
        qa-ref="swatch"
        @click="activeSwatchIndex = index"
      >
        <CheckIcon :class="$style.checkIcon" />
      </li>
    </ul>

    <ul
      :class="$style.colorModes"
      class="flex pt-2 pb-4"
    >
      <li
        :key="index"
        v-for="(colorMode, index) in colorModes"
      >
        <button
          :class="[
            $style.colorMode,
            { active: activeColorModeIndex === index },
            { [$style.active]: activeColorModeIndex === index }
          ]"
          class="uppercase font-bold text-gray-800 bg-white p-3 mr-2 rounded-xl"
          qa-ref="color-mode"
          @click="activeColorModeIndex = index"
        >
          {{ colorMode }}
        </button>
      </li>
    </ul>

    <p
      :class="$style.colorCode"
      class="uppercase font-bold bg-white p-2 mr-2 text-gray-800"
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
  .active {

  }

  .root {

  }

  .swatches {

  }

  .checkIcon {
    display: none;
    color: #fff;
    fill: currentColor;
    margin: .5rem;
  }

  .swatch.active {
    .checkIcon {
      display: block;
    }
  }

  .colorMode.active {
    background-color: #1f2937;
    color: #fff;
  }

  .colorModes {

  }

  .colorCode {
    
  }

</style>