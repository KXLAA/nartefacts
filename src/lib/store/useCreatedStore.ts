/* eslint-disable @typescript-eslint/no-var-requires */
import { nanoid } from 'nanoid'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { ColorsTuple } from '@/components/palette'

type GeneratedColors = {
  id: string
  imageUrl: string
  colors: ColorsTuple
}

// type LikedColors = {
//   id: string
//   image: string
//   colors: ColorsTuple
// }

type CreatedStore = {
  generatedColors: GeneratedColors[]
  addGeneratedColor: (image: string, colors: ColorsTuple) => void
  removeGeneratedColor: (id: string) => void
  clearAllGeneratedColors: () => void
}

// type LikedStore = {
//   likedColors: LikedColors[]
//   addLikedColor?: (image: string, colors: ColorsTuple) => void
//   removeLikedColor?: (id: string) => void
//   clearAllLikedColors?: () => void
// }

export const useCreatedStore = create(
  persist<CreatedStore>(
    (set) => ({
      // initial state
      generatedColors: [],

      // actions
      addGeneratedColor: (imageUrl: string, colors: ColorsTuple) => {
        //Limit amount of items that can be added to the array
        const limitArray = (
          colors: GeneratedColors[],
          color: GeneratedColors,
        ) => [...colors.slice(0, 59), color]
        set((state) => ({
          generatedColors: limitArray(state.generatedColors, {
            id: nanoid(),
            imageUrl,
            colors,
          }),
        }))
      },
      removeGeneratedColor: (id: string) => {
        set((state) => ({
          generatedColors: state.generatedColors.filter(
            (color) => color.id !== id,
          ),
        }))
      },
      clearAllGeneratedColors: () => {
        set(() => ({
          generatedColors: [],
        }))
      },
    }),
    // persist generatedColors in local storage
    {
      name: 'generatedColors',
    },
  ),
)

// export const useLikeStore = create(
//   persist<LikedStore>(
//     (set) => ({
//       // initial state
//       likedColors: [],

//       // actions
//     }),
//     // persist generatedColors in local storage
//     {
//       name: 'liked-colors',
//     },
//   ),
// )
