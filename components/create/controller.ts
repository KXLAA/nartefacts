import type { palettes } from "@prisma/client";
import { useAnimation } from "framer-motion";
import { useS3Upload } from "next-s3-upload";
import React from "react";
import { useDropzone } from "react-dropzone";

import { api } from "@/lib/api";
import type { ColorsTuple } from "@/lib/color-helpers";
import { useLocalStorage } from "@/lib/use-local-storage";

//https://codesandbox.io/s/9ovl4?file=/src/App.tsx:1083-1088

type PreviewPage = "home" | "export" | "download";
export type SavedPalettes = palettes & {
  savedAt: Date;
};

export function useCreatePage() {
  const controls = useAnimation();
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isUploaded, setIsUploaded] = React.useState<boolean>(false);
  const [downloadUrl, setDownloadUrl] = React.useState<string | null>(null);
  const [previewPage, setPreviewPage] = React.useState<PreviewPage>("home");
  const [savedPallettes, setSavedPallettes] = useLocalStorage<SavedPalettes[]>(
    "nartefacts-pallettes",
    []
  );
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const [palette, setPalette] = React.useState<palettes>({} as palettes);
  const generateColors = api.palettes.generate.useMutation();
  const removeColor = api.palettes.removeColor.useMutation();
  const exportColors = api.palettes.export.useMutation();

  const { uploadToS3 } = useS3Upload();
  const onDrop = React.useCallback(async (acceptedFiles: File[]) => {
    const { url } = await uploadToS3(acceptedFiles[0]);
    setIsLoading(true);

    if (url == null) {
      setError("Failed to upload image");
      return;
    }

    const [palette, error] = await generateColors.mutateAsync({
      imageUrl: url,
    });

    if (error != null) {
      setError(error);
      setIsLoading(false);
      return;
    } else {
      setError(null);
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
      setPalette(palette);
      setIsUploaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dropzone = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  async function exportAsCode() {
    //colors: ColorsTuple
    const [data, error] = await exportColors.mutateAsync({
      colors: palette.palette as ColorsTuple,
      type: "code",
    });

    if (error != null) return;
    setDownloadUrl(data);
    setPreviewPage("download");
  }

  async function exportAsCss() {
    //colors: ColorsTuple
    const [data, error] = await exportColors.mutateAsync({
      colors: palette.palette as ColorsTuple,
      type: "css",
    });

    if (error != null) return;

    setDownloadUrl(data);
    setPreviewPage("download");
  }

  function downloadExportedColors() {
    if (downloadUrl == null) return;
    window.open(downloadUrl);

    setTimeout(() => {
      setPreviewPage("home");
    }, 5000);
  }

  function setEditingToFalse() {
    controls.stop();
    controls.set("reset");
    setIsEditing(false);
  }

  function setEditingToTrue() {
    controls.start("start");
    setIsEditing(true);
  }

  function toggleEditing() {
    if (isEditing) {
      setEditingToFalse();
    } else {
      setEditingToTrue();
    }
  }

  return {
    dropzone: {
      ...dropzone,
    },
    editing: {
      isEditing,
      set: setIsEditing,
      toggle: toggleEditing,
      setToTrue: setEditingToTrue,
      setToFalse: setEditingToFalse,
    },
    error,
    isLoading,
    palette,
    isUploaded,
    colors: {
      remove: removeColor.mutateAsync,
      export: exportColors,
      animation: {
        controls,
        getRandomTransformOrigin,
        variants,
      },
    },
    export: {
      asCode: exportAsCode,
      asCss: exportAsCss,
    },
    exported: {
      url: downloadUrl,
      download: downloadExportedColors,
    },
    page: {
      current: previewPage,
      goToHome: () => setPreviewPage("home"),
      goToExport: () => setPreviewPage("export"),
      goToDownload: () => setPreviewPage("download"),
    },
    savedPallettes: {
      list: savedPallettes,
      add: (pallette: palettes) => {
        setSavedPallettes((prev) => {
          return [...prev, { ...pallette, savedAt: new Date() }];
        });
      },
      delete: (pallette: palettes) => {
        setSavedPallettes((prev) => {
          return prev.filter((p) => p.id !== pallette.id);
        });
      },
    },
  };
}

function useUpload() {
  const { uploadToS3 } = useS3Upload();
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isUploaded, setIsUploaded] = React.useState<boolean>(false);
  const [palette, setPalette] = React.useState<palettes>({} as palettes);
  const generateColors = api.palettes.generate.useMutation();

  const onDrop = React.useCallback(async (acceptedFiles: File[]) => {
    const { url } = await uploadToS3(acceptedFiles[0]);
    setIsLoading(true);

    if (url == null) {
      setError("Failed to upload image");
      return;
    }

    const [palette, error] = await generateColors.mutateAsync({
      imageUrl: url,
    });

    if (error != null) {
      setError(error);
      setIsLoading(false);
      return;
    } else {
      setError(null);
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
      setPalette(palette);
      setIsUploaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dropzone = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });
  return {
    dropzone,
    palette,
    isUploaded,
    error,
    isLoading,
  };
}

const variants = {
  start: (i: number) => ({
    rotate: i % 2 === 0 ? [-1, 1.3, 0] : [1, -1.4, 0],
    transition: {
      delay: getRandomDelay(),
      repeat: Infinity,
      duration: randomDuration(),
    },
  }),
  reset: {
    rotate: 0,
  },
};

function getRandomTransformOrigin() {
  const value = (16 + 40 * Math.random()) / 100;
  const value2 = (15 + 36 * Math.random()) / 100;
  return {
    originX: value,
    originY: value2,
  };
}

function getRandomDelay() {
  return -(Math.random() * 0.7 + 0.05);
}

function randomDuration() {
  return Math.random() * 0.07 + 0.23;
}

export type CreateController = ReturnType<typeof useCreatePage>;
