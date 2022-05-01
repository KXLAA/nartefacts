import { colorsTuple } from 'components/Palette'
import create from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { persist } from 'zustand/middleware'

type GeneratedColors = {
  id: string
  image: string
  colors: colorsTuple
}

type CreatedStore = {
  generatedColors: GeneratedColors[]
  addGeneratedColor: (image: string, colors: colorsTuple) => void
  removeGeneratedColor: (id: string) => void
}

export const useCreatedStore = create(
  persist<CreatedStore>(
    (set) => ({
      // initial state
      generatedColors: [],

      // actions
      addGeneratedColor: (image: string, colors: colorsTuple) => {
        set((state) => ({
          generatedColors: [
            ...state.generatedColors,
            { id: uuidv4(), image, colors } as GeneratedColors,
          ],
        }))
      },
      removeGeneratedColor: (id: string) => {
        set((state) => ({
          generatedColors: state.generatedColors.filter(
            (color) => color.id !== id,
          ),
        }))
      },
    }),
    // persist options
    {
      name: 'generatedColors',
    },
  ),
)
