import { useCreatePage } from "@/components/create/controller";
import { ImagePreview } from "@/components/create/ImagePreview";
import { ImageUploader } from "@/components/create/ImageUploader";
import { Layout } from "@/components/layout/Layout";
import { SavedPallettes } from "@/components/saved/SavedPallettes";

export default function Create() {
  const c = useCreatePage();

  return (
    <Layout
      className="relative flex flex-col items-center w-full max-w-5xl min-h-screen gap-8 p-2 m-auto overflow-hidden"
      meta={{
        title: `nartefacts | Create`,
      }}
    >
      <ImageUploader {...c} />
      <ImagePreview {...c} />
      <SavedPallettes type="recent" />
    </Layout>
  );
}
