import { useCreate } from "@/components/create/controller";
import { ImagePreview } from "@/components/create/ImagePreview";
import { Layout } from "@/components/layout/Layout";

export default function Create() {
  const controller = useCreate();

  return (
    <Layout className="relative flex flex-col items-center justify-between w-full max-w-5xl min-h-screen p-2 m-auto overflow-hidden">
      <ImagePreview {...controller} />
    </Layout>
  );
}
