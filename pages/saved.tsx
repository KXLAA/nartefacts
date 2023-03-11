import { SavedPallettes } from "@/components/common/SavedPallettes";
import { Layout } from "@/components/layout/Layout";

export default function Saved() {
  return (
    <Layout
      className="relative flex flex-col items-center justify-between w-full max-w-5xl min-h-screen p-2 m-auto overflow-hidden"
      meta={{
        title: `nartefacts | Saved`,
      }}
    >
      <SavedPallettes type="saved" />
    </Layout>
  );
}
