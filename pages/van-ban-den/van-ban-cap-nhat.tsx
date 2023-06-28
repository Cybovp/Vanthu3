import Head from "next/head";
import React from "react";
import Update_doc from "./update_doc/Doc_update";

const Index = () => {
  return (
    <>
      <Head>
        <title> Văn bản cập nhật </title>
        <meta name="keywords" content="Văn bản cập nhật" />
        <link rel="shortcut icon" href="https://timviec365.vn/favicon.ico" />
      </Head>
      <Update_doc />
    </>
  );
};

export default Index;
