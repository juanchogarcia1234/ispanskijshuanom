// components/layout.js

import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
