import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="preload" as="image" href="/images/splash.png" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}