import type { palettes } from "@prisma/client";

import { useLocalStorage } from "@/lib/hooks/use-local-storage";

export type SavedPalettes = palettes & {
  savedAt: Date;
};

export function useSavedPallettes() {
  const [savedPallettes, setSavedPallettes] = useLocalStorage<SavedPalettes[]>(
    "nartefacts-pallettes",
    []
  );
  return [savedPallettes, setSavedPallettes] as const;
}
