"use client";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Avartar from "../avatar/Avartar";
import { List_document } from "./list_document/List_document";
import { menuData } from "./list_document/Array_sub_item";
import Sidebar_btn from "./sidebar_btn/Sidebar_btn";

const Sidebar_quanlycongvan = () => {
  const [active, setActive] = useState(false);
  // const [receivedData, setreceivedData] = useState("");
  const handleReceiveDataFromChild = (data: boolean) => {
    setActive(data);
  };
  return (
    <div className={`${styles.menu}`}>
      <ul>
        <Sidebar_btn
          sendDataToParent={handleReceiveDataFromChild}
          href="/"
          image="icon_home.png"
          title="Trang chủ"
          active={active}
        />
        <Sidebar_btn
          sendDataToParent={handleReceiveDataFromChild}
          href="/"
          image="icon_num.png"
          title="Chuyển đổi số"
          active={true}
        />
      </ul>
    </div>
  );
};

export default Sidebar_quanlycongvan;
