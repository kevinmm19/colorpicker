import {
  hex,
  hsl,
  rgb,
} from '@/utils/color';

const color = `e3342f`;

describe(`Color`, () => {
  it(`should return the color into hexadecimal notation`, () => {
    expect(hex(color)).toBe(`#e3342f`);
  });

  it(`should return the color into HSL notation`, () => {
    expect(hsl(color)).toBe(`2°, 76%, 54%`);
  });

  it(`should return the color into RGB notation`, () => {
    expect(rgb(color)).toBe(`227, 52, 47`);
  });
});
