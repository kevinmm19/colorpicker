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
    isLight,
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

    get activeSwatch(): string {
      return this.swatches[this.activeSwatchIndex];
    }

    get activeCode(): string {
      const activeMode = this.colorModes[this.activeColorModeIndex];

      switch (activeMode) {
        case `hsl`:
          return hsl(this.activeSwatch);
        case `rgb`:
          return rgb(this.activeSwatch);
        default:
          return hex(this.activeSwatch);
      }
    }

    get isActiveSwatchLight(): boolean {
      return isLight(this.activeSwatch);
    }
  }
</script>

<template>
  <div class="container max-w-xs md:max-w-lg py-4 bg-gray-200 border border-gray-300 shadow-xl rounded-2xl">
    <ul
      class="
        grid grid-rows-6 grid-cols-5 gap-2
        sm:grid-rows-5 sm:grid-cols-6
        md:grid-rows-3 md:grid-cols-10
      "
    >
      <li
        :key="index"
        v-for="(swatch, index) in swatches"
        :class="[
          $style.swatch,
          { [$style.active]: activeSwatchIndex === index },
        ]"
        :style="{ backgroundColor: `#${swatch}` }"
        class="h-10 w-10 md:h-18 md:w-18 rounded-xl"
        qa-ref="swatch"
        @click="activeSwatchIndex = index"
      >
        <CheckIcon
          :class="[
            $style.checkIcon,
            { [$style.checkIconDark]: isActiveSwatchLight }
          ]"
        />
      </li>
    </ul>

    <ul class="flex py-4">
      <li
        :key="index"
        v-for="(colorMode, index) in colorModes"
      >
        <button
          :class="[
            $style.colorMode,
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
  $color-bg-gray-800: #1f2937;
  $color-white: #fff;

  .checkIcon {
    display: none;
    color: $color-white;
    fill: currentColor;
    margin: .5rem;
  }

  .checkIconDark {
    color: $color-bg-gray-800;
    fill: currentColor;
  }

  .swatch.active {
    .checkIcon {
      display: block;
    }
  }

  .colorMode.active {
    background-color: $color-bg-gray-800;
    color: $color-white;
  }
</style>