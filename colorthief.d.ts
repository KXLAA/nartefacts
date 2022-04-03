declare module 'colorthief' {
  const getPalette: (
    sourceImage: string,
    colorCount?: number,
    quality?: number,
  ) => Promise<[number, number, number][]>
}
