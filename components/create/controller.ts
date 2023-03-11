import type { palettes } from "@prisma/client";
import { useAnimation } from "framer-motion";
import { useS3Upload } from "next-s3-upload";
import React from "react";
import { useDropzone } from "react-dropzone";
import useEyeDropper from "use-eye-dropper";

import { api } from "@/lib/api";
import type { ColorsTuple } from "@/lib/color-helpers";
import { useSavedPallettes } from "@/lib/hooks/use-saved-pallettes";

//https://codesandbox.io/s/9ovl4?file=/src/App.tsx:1083-1088

// TODO: Clean up the logic here

type PreviewPage = "home" | "export" | "download";
export type SavedPalettes = palettes & {
  savedAt: Date;
};

export function useCreatePage() {
  const controls = useAnimation();
  const { dropzone, palette, isUploaded, error, isLoading, setPalette } =
    useUpload();
  const [downloadUrl, setDownloadUrl] = React.useState<string | null>(null);
  const [previewPage, setPreviewPage] = React.useState<PreviewPage>("home");
  const [savedPallettes, setSavedPallettes] = useSavedPallettes();
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const removeColor = api.palettes.removeColor.useMutation();
  const exportColors = api.palettes.export.useMutation();

  async function exportAsCode() {
    //colors: ColorsTuple
    const [data, error] = await exportColors.mutateAsync({
      colors: palette.item.palette as ColorsTuple,
      type: "code",
    });

    if (error != null) return;
    setDownloadUrl(data);
    setPreviewPage("download");
  }

  async function exportAsCss() {
    //colors: ColorsTuple
    const [data, error] = await exportColors.mutateAsync({
      colors: palette.item.palette as ColorsTuple,
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
    state: {},
    actions: {},
    modals: {},

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
    animation: {
      controls,
    },
    colors: {
      remove: removeColor.mutateAsync,
      export: exportColors,
    },
    export: {
      asCode: exportAsCode,
      asCss: exportAsCss,
    },
    exported: {
      url: downloadUrl,
      download: downloadExportedColors,
    },
    setPalette,
    page: {
      current: previewPage,
      goToHome: () => {
        setPreviewPage("home");
        setEditingToFalse();
      },
      goToExport: () => {
        setPreviewPage("export");
        setEditingToFalse();
      },
      goToDownload: () => {
        setPreviewPage("download");
        setEditingToFalse();
      },
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
    palette: {
      item: palette,
      set: setPalette,
    },
    isUploaded,
    error,
    isLoading,
    setPalette,
  };
}

type Args = {
  color: string;
  id: string;
  setPalette: (palette: palettes) => void;
  index: number;
};

export function useColorBox(props: Args) {
  const { open, close, isSupported } = useEyeDropper();
  const [color, setColor] = React.useState(props.color);
  const [error, setError] = React.useState();
  const editColor = api.palettes.editColor.useMutation();
  const removeColor = api.palettes.removeColor.useMutation();

  function pickColor() {
    open()
      .then((color) => {
        setColor(color.sRGBHex);
        editColor.mutateAsync({
          id: props.id,
          color: color.sRGBHex,
          newColor: color.sRGBHex,
        });
      })
      .catch((e) => {
        console.log(e);
        // Ensures component is still mounted
        // before calling setState
        if (!e.canceled) setError(e);
      });
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

  async function remove() {
    const [palette, error] = await removeColor.mutateAsync({
      id: props.id,
      color: color,
      index: props.index,
    });

    if (error != null) {
      console.log(error);
    }

    if (palette) {
      props.setPalette(palette);
    }
  }

  return {
    color,
    pickColor,
    isSupported,
    close,
    error,
    animation: {
      getRandomTransformOrigin,
      variants,
    },
    removeColor: remove,
  };
}

function getRandomDelay() {
  return -(Math.random() * 0.7 + 0.05);
}

function randomDuration() {
  return Math.random() * 0.07 + 0.23;
}

export type CreateController = ReturnType<typeof useCreatePage>;
