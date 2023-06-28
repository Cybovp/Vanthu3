import Head from "next/head";
import React from "react";
import Doc_new from "./doc_new";

const Index = () => {
  return (
    <>
      <Head>
        <title> Văn bản mới </title>
        <meta name="keywords" content="Van bản mới" />
        <link rel="shortcut icon" href="https://timviec365.vn/favicon.ico" />
      </Head>
      <Doc_new />
    </>
  );
};

export default Index;
