import {
  hex,
  hsl,
  isLight,
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

  it(`should return true when the color is over 80% lightness`, () => {
    expect(isLight(`fff`)).toBe(true);
  });

  it(`should return true when the color is equal to 80% lightness`, () => {
    expect(isLight(`f9d`)).toBe(true);
  });

  it(`should return false when the color is under 80% lightness`, () => {
    expect(isLight(`000`)).toBe(false);
  });
});
