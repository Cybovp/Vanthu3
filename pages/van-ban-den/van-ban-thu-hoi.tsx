import Head from "next/head";
import React from "react";
import Revocation_doc from "./revocation/Doc_revocation";

const Index = () => {
  return (
    <>
      <Head>
        <title> Văn bản thu hồi </title>
        <meta name="keywords" content="Văn bản thu hồi" />
        <link rel="shortcut icon" href="https://timviec365.vn/favicon.ico" />
      </Head>
      <Revocation_doc />
    </>
  );
};

export default Index;
