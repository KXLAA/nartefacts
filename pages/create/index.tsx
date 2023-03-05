import { useCreate } from "@/components/create/controller";
import { ImagePreview } from "@/components/create/ImagePreview";
import { ImageUploader } from "@/components/create/ImageUploader";

export default function Create() {
  const controller = useCreate();

  return (
    <main className="relative flex flex-col items-center justify-between w-full max-w-5xl min-h-screen p-2 m-auto overflow-hidden">
      <ImageUploader {...controller} />
      <ImagePreview {...controller} />
    </main>
  );
}
