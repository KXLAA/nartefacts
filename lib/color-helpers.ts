import ColorThief from "colorthief";
import { GetColorName } from "hex-color-to-color-name";

export type ColorsTuple = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

type ColorNames = {
  hex: string;
  name: string;
};

interface IColors {
  getPalette(url: string): Promise<ColorsTuple | undefined>;
  isValidHexCode(hex: string): boolean;
  rgbToHex(arr: [number, number, number]): string;
  getColorNames(colors: ColorsTuple): ColorNames[];
  getColorsForExport(type: "code" | "css", colors: ColorsTuple): string;
}

class Colors implements IColors {
  private formatCss(colors: ColorNames[]) {
    const css = colors
      .map((color) => `--${color.name}: ${color.hex};`)
      .join("\n");
    const scss = colors
      .map((color) => `$${color.name}: ${color.hex};`)
      .join("\n");

    return `/* CSS Variables */ \n:root {\n${css}\n}
        \n/* SCSS/SASS Variables */\n${scss}`;
  }

  private formatCode(colors: ColorNames[]) {
    const array = JSON.stringify(
      colors.map((color) => color.hex),
      null,
      2
    );
    const object = JSON.stringify(
      colors.reduce(
        (acc, color) => ({
          ...acc,
          [color.name]: color.hex,
        }),
        {}
      )
    );

    return `// Array \n${array} \n\n// JSON Object \n${object}`;
  }

  async getPalette(url: string) {
    try {
      const colors = await ColorThief.getPalette(url!, 8, 10);
      return colors.map((color) => this.rgbToHex(color)) as ColorsTuple;
    } catch (error) {
      if (error as Error) {
        console.error(error);
      }
    }
  }

  isValidHexCode(hex: string) {
    const isValidHexCode = /^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i;
    return isValidHexCode.test(hex);
  }

  rgbToHex(arr: [number, number, number]): string {
    return "#" + arr.map((v) => ("0" + v.toString()).slice(-2)).join("");
  }

  getColorNames(colors: ColorsTuple) {
    return colors.map((color) => {
      const colorName: string = GetColorName(color)
        .toLowerCase()
        .replace(/\s/g, "-");
      return {
        hex: color,
        name: colorName,
      };
    });
  }

  getColorsForExport(type: "code" | "css", colors: ColorsTuple) {
    const formattedColors = this.getColorNames(colors);
    const formattedCss = this.formatCss(formattedColors);
    const formattedCode = this.formatCode(formattedColors);

    switch (type) {
      case "code":
        return formattedCode;
      case "css":
        return formattedCss;
      default:
        return "";
    }
  }
}

export const CH = new Colors();
