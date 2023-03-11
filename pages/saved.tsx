import { SavedPallettes } from "@/components/common/SavedPallettes";
import { Layout } from "@/components/layout/Layout";
import { useSavedPallettes } from "@/lib/hooks/use-saved-pallettes";

export default function Saved() {
  const [savedPallettes] = useSavedPallettes();

  return (
    <Layout
      className="relative flex flex-col items-center justify-between w-full max-w-5xl min-h-screen p-2 m-auto overflow-hidden"
      meta={{
        title: `nartefacts | Saved`,
      }}
    >
      <SavedPallettes savedPallettes={savedPallettes} type="saved" />
    </Layout>
  );
}
