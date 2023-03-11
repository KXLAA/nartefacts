import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "sonner";

import { api } from "@/lib/api";
import { DefaultSeo } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
  display: "swap",
  variable: "--font-poppins",
});

const helios = localFont({
  preload: true,
  display: "swap",
  src: [
    {
      path: "../public/fonts/HeliosExt.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/HeliosExt-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-helios",
});

//https://github.com/calcom/cal.com/blob/main/apps/web/pages/_app.tsx
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo />
      <style jsx global>{`
        html {
          --font-poppins: ${poppins.style.fontFamily};
          --font-helios: ${helios.style.fontFamily};
        }
      `}</style>
      <Toaster
        theme="dark"
        toastOptions={{
          className: "!bg-cod-gray-700 !text-silver-700",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default api.withTRPC(App);
