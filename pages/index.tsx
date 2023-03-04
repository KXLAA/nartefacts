import Head from "next/head";

import { Button } from "@/components/common/Button";
import { api } from "@/lib/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-between min-h-screen p-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-6xl font-black">NEXT JS STARTER</h1>
          <Button size="lg">Click me</Button>
          <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
        </div>
      </main>
    </>
  );
}
