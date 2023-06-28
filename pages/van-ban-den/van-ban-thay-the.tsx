import Head from "next/head";
import React from "react";
import Alternative_doc from "./alternative/Doc_alternative";

const Index = () => {
  return (
    <>
      <Head>
        <title> Văn bản thay thế</title>
        <meta name="keywords" content="Văn bản thay thế" />
        <link rel="shortcut icon" href="https://timviec365.vn/favicon.ico" />
      </Head>
      <Alternative_doc />
    </>
  );
};

export default Index;
