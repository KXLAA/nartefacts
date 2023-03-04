import Head from "next/head";
import React from "react";

import { Loader } from "@/components/common/Loader";
import { Album } from "@/components/home/Album";
import { useHomePage } from "@/components/home/controller";

export default function Home() {
  const controller = useHomePage();

  return (
    <>
      <Head>
        <title>nartefacts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-between min-h-screen p-2">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
          {controller.isLoading ? (
            Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className=" h-[440px] flex flex-col items-center justify-center w-full p-4 rounded bg-cod-gray-500 shadow-border-shiny animate-pulse"
              />
            ))
          ) : (
            <>
              <div className="flex flex-col items-center justify-center w-full h-full p-4 rounded bg-cod-gray-500 shadow-border-shiny">
                <Loader />
              </div>
              {controller?.albums?.map((album) => (
                <Album key={album.id} {...album} />
              ))}
            </>
          )}
        </div>

        {controller.isFetchingNextPage && <Loader />}

        <div
          style={{ height: "2rem" }}
          ref={controller.ref}
          aria-hidden="true"
        />
      </main>
    </>
  );
}
