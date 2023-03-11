import { SavedPallettes } from "@/components/common/SavedPallettes";
import { useCreatePage } from "@/components/create/controller";
import { ImagePreview } from "@/components/create/ImagePreview";
import { ImageUploader } from "@/components/create/ImageUploader";
import { Layout } from "@/components/layout/Layout";

export default function Create() {
  const controller = useCreatePage();

  return (
    <Layout
      className="relative flex flex-col items-center w-full max-w-5xl min-h-screen gap-8 p-2 m-auto overflow-hidden"
      meta={{
        title: `nartefacts | Create`,
      }}
    >
      <ImageUploader {...controller} />
      <ImagePreview {...controller} />
      <SavedPallettes type="recent" />
    </Layout>
  );
}
