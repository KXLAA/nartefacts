import type { palettes } from "@prisma/client";
import { useS3Upload } from "next-s3-upload";
import React from "react";
import { useDropzone } from "react-dropzone";

import { api } from "@/lib/api";

export function useCreate() {
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [palette, setPalette] = React.useState<palettes>();
  const generateColors = api.palettes.generate.useMutation();

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
    dropzone: {
      ...dropzone,
    },
    error,
    uploadProgress: files[0]?.progress,
    isLoading,
    palette,
  };
}

export type CreateController = ReturnType<typeof useCreate>;
