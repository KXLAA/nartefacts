import type { palettes } from "@prisma/client";
import { useS3Upload } from "next-s3-upload";
import React from "react";
import { useDropzone } from "react-dropzone";

import { api } from "@/lib/api";
import type { ColorsTuple } from "@/lib/color-helpers";
import { useLocalStorage } from "@/lib/use-local-storage";

type PreviewPage = "home" | "export" | "download";
type SavedPalettes = palettes & {
  savedAt: Date;
};

export function useCreate() {
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isUploaded, setIsUploaded] = React.useState<boolean>(false);
  const [downloadUrl, setDownloadUrl] = React.useState<string | null>(null);
  const [previewPage, setPreviewPage] = React.useState<PreviewPage>("home");
  const [savedPallettes, setSavedPallettes] =
    useLocalStorage<SavedPalettes | null>("nartefacts-pallettes", null);

  const [palette, setPalette] = React.useState<palettes>();
  const generateColors = api.palettes.generate.useMutation();
  const removeColor = api.palettes.removeColor.useMutation();
  const exportColors = api.palettes.export.useMutation();

  const { uploadToS3, files } = useS3Upload();
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

  async function exportAsCode(colors: ColorsTuple) {
    const [data, error] = await exportColors.mutateAsync({
      colors: colors,
      type: "code",
    });

    if (error != null) return;
    setDownloadUrl(data);
    setPreviewPage("download");
  }

  async function exportAsCss(colors: ColorsTuple) {
    const [data, error] = await exportColors.mutateAsync({
      colors: colors,
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

  return {
    dropzone: {
      ...dropzone,
    },
    error,
    uploadProgress: files[0]?.progress,
    isLoading,
    palette,
    isUploaded,
    removeColor,
    exportColors,
    export: {
      asCode: exportAsCode,
      asCss: exportAsCss,
    },
    downloadUrl,
    downloadExportedColors,
    page: {
      current: previewPage,
      home: previewPage === "home",
      export: previewPage === "export",
      download: previewPage === "download",
      goToHome: () => setPreviewPage("home"),
      goToExport: () => setPreviewPage("export"),
      goToDownload: () => setPreviewPage("download"),
    },
    savedPallette: setSavedPallettes,
    savedPallettes,
  };
}

export type CreateController = ReturnType<typeof useCreate>;
