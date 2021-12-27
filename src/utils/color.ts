import convert from 'color-convert';

const hex = (color: string): string => {
  return `#${color}`;
};

const hsl = (color: string): string => {
  const hslColor = convert.hex.hsl(color);

  return `${hslColor[0]}°, ${hslColor[1]}%, ${hslColor[2]}%`;
};

const rgb = (color: string): string => {
  return convert.hex.rgb(color).join(`, `);
};

export {
  hex,
  hsl,
  rgb,
};
