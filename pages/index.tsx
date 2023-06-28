import Head from "next/head";
import Link from "next/link";
import React from "react";
import Home from "./quanly-cong-van";

const index = () => {
  return (
    <>
      <Head>
        <title> Quản lý công văn</title>
        <meta name="keywords" content="Home" />
        <link rel="shortcut icon" href="https://timviec365.vn/favicon.ico" />
      </Head>
      <Home />
    </>
  );
};

export default index;
