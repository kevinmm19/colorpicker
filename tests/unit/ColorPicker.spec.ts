import ColorPicker from '@/components/ColorPicker.vue';
import {
  shallowMount,
  Wrapper,
} from '@vue/test-utils';
import convert from 'color-convert';

const propsData = {
  swatches: [
    `e3342f`,
    `3490dc`,
    `f6993f`,
    `38c172`,
    `fff`,
  ],
};
let wrapper: Wrapper<Vue>;

beforeEach(() => (
  wrapper = shallowMount(ColorPicker, { propsData })
));

afterEach(() => wrapper.destroy());

describe(`ColorPicker`, () => {
  describe(`Swatches`, () => {
    it(`should display each color as an individual swatch`, () => {
      const swatches = wrapper.findAll(`[qa-ref="swatch"]`);

      propsData.swatches.forEach((swatch, index) => {
        expect(swatches.at(index).attributes().style).toBe(
          `background-color: rgb(${convert.hex.rgb(swatch).join(`, `)});`,
        );
      });
    });

    it(`should set the first swatch as the selected one by default`, () => {
      const firstSwatch = wrapper.find(`[qa-ref="swatch"]`);

      expect(firstSwatch.classes()).toContain(`active`);
    });

    it(`should make the swatch active when clicked`, async () => {
      const targetSwatch = wrapper.findAll(`[qa-ref="swatch"]`).at(1);

      await targetSwatch.trigger(`click`);

      expect(targetSwatch.classes()).toContain(`active`);
    });
  });

  describe(`Color Modes`, () => {
    it(`should display at least two color modes`, () => {
      const colorModes = wrapper.findAll(`[qa-ref="color-mode"]`);

      expect(colorModes.length).toBeGreaterThan(1);
    });

    it(`should set the first color mode as the selected one by default`, () => {
      const firstColorMode = wrapper.find(`[qa-ref="color-mode"]`);

      expect(firstColorMode.classes()).toContain(`active`);
    });

    it(`should make the color mode active when clicked`, async () => {
      const targetColorMode = wrapper.findAll(`[qa-ref="color-mode"]`).at(1);

      await targetColorMode.trigger(`click`);

      expect(targetColorMode.classes()).toContain(`active`);
    });
  });

  describe(`Color Codes`, () => {
    it(`should display the default swatch in the default color mode`, () => {
      expect(wrapper.find(`[qa-ref="color-code"]`).text()).toBe(`#e3342f`);
    });

    it(`should display the code in the right mode when changing mode`, async () => {
      const targetColorMode = wrapper.findAll(`[qa-ref="color-mode"]`).at(1);

      await targetColorMode.trigger(`click`);

      expect(wrapper.find(`[qa-ref="color-code"]`).text()).toBe(`2°, 76%, 54%`);
    });

    it('should display the code in the right color when changing color', async () => {
      const targetSwatch = wrapper.findAll(`[qa-ref="swatch"]`).at(1);

      await targetSwatch.trigger(`click`);

      expect(wrapper.find(`[qa-ref="color-code"]`).text()).toBe(`#3490dc`);
    });
  });
});
