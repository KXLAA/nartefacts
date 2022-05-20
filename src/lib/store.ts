/* eslint-disable @typescript-eslint/no-var-requires */
import { colorsTuple } from '@/components/Palette'
import create from 'zustand'
import { nanoid } from 'nanoid'
import { persist } from 'zustand/middleware'

type GeneratedColors = {
  id: string
  image: string
  colors: colorsTuple
}

// type LikedColors = {
//   id: string
//   image: string
//   colors: colorsTuple
// }

type CreatedStore = {
  generatedColors: GeneratedColors[]
  addGeneratedColor: (image: string, colors: colorsTuple) => void
  removeGeneratedColor: (id: string) => void
  clearAllGeneratedColors: () => void
}

// type LikedStore = {
//   likedColors: LikedColors[]
//   addLikedColor: (image: string, colors: colorsTuple) => void
//   removeLikedColor: (id: string) => void
//   clearAllLikedColors: () => void
// }

export const useCreatedStore = create(
  persist<CreatedStore>(
    (set) => ({
      // initial state
      generatedColors: [],

      // actions
      addGeneratedColor: (image: string, colors: colorsTuple) => {
        //Limit amount of items that can be added to the array
        const limitArray = (
          colors: GeneratedColors[],
          color: GeneratedColors,
        ) => [...colors.slice(0, 59), color]
        set((state) => ({
          generatedColors: limitArray(state.generatedColors, {
            id: nanoid(),
            image,
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
