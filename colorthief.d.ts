declare module "colorthief" {
  const getPalette: (
    sourceImage: string,
    colorCount?: number,
    quality?: number
  ) => Promise<[red: number, green: number, blue: number][]>;
}
