import Head from "next/head";
import React from "react";
import Been_processed from "./been_processed/Been_processed";

const Index = () => {
  return (
    <>
      <Head>
        <title> Văn bản đã được xử lý </title>
        <meta name="keywords" content="Van ban moi" />
        <link rel="shortcut icon" href="https://timviec365.vn/favicon.ico" />
      </Head>
      <Been_processed />
    </>
  );
};

export default Index;
