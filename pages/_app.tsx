import "../styles/globals.css";
import "../styles/header.css";
import "../styles/banner.css";
import "../styles/intro.css";
import "../styles/touts.css";
import "../styles/columns-first.css";
import "../styles/columns-second.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
