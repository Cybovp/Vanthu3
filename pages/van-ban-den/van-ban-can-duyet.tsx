import Head from "next/head";
import React from "react";
import Review_doc from "./need_review/Doc_need_review";
const Index = () => {
  return (
    <>
      <Head>
        <title> Văn bản cần duyệt </title>
        <meta name="keywords" content="Home" />
        <link rel="shortcut icon" href="https://timviec365.vn/favicon.ico" />
      </Head>
      <Review_doc />
    </>
  );
};

export default Index;
