import Head from "next/head";
import type { DefaultSeoProps, NextSeoProps } from "next-seo";
import { DefaultSeo as DefaultNextSeo, NextSeo } from "next-seo";

export interface SeoProps extends NextSeoProps {
  ogImage?: string;
}

export function Seo(props: SeoProps) {
  const { ogImage, ...meta } = props;
  return (
    <>
      <NextSeo {...meta} />
      <Head>
        <meta name="twitter:image" content={ogImage} />
      </Head>
    </>
  );
}

export function DefaultSeo() {
  const seo: DefaultSeoProps = {
    title: `nartefacts | Colors inspired by African music.`,
    description:
      "Color pallette's inspired by the vibrant colors of African music.",
    openGraph: {
      title: `nartefacts | Colors inspired by African music.`,
      type: "website",
      url: "https://www.nartefacts.com/",
      images: [
        {
          url: "https://ucarecdn.com/85a59495-37d7-4fd0-b128-482cdbf43445/OGIMAGE.png",
          width: 1200,
          height: 600,
          alt: `nartefacts | Colors inspired by African music.`,
          type: "website",
        },
      ],
    },
  };

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="images/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="images/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="twitter:image"
          content="https://ucarecdn.com/85a59495-37d7-4fd0-b128-482cdbf43445/OGIMAGE.png"
        />
      </Head>

      <DefaultNextSeo {...seo} />
    </>
  );
}
