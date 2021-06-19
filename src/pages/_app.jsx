import "src/styles/globals.css";
import Head from "next/head";

import { useCounter } from "src/hooks/useCounter";
import { useArray } from "src/hooks/useArray";
import { useBgColor } from "src/hooks/useleghtblue";
function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const array = useArray();
  useBgColor();

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...array} />
    </>
  );
}

export default MyApp;
