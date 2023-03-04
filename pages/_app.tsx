import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import { api } from "@/lib/api";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
  display: "swap",
});

// const helios = localFont({
//   src: "../fonts/Helios.ttf",
//   preload: true,
//   display: "swap",
// });

//https://github.com/calcom/cal.com/blob/main/apps/web/pages/_app.tsx
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default api.withTRPC(App);
