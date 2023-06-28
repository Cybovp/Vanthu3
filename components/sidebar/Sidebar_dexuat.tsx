"use client";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Avartar from "../avatar/Avartar";
import { List_document } from "./list_document/List_document";
import { menuData } from "./list_document/Array_sub_item";
import Sidebar_btn from "./sidebar_btn/Sidebar_btn";

const Sidebar_dexuat = () => {
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
        <List_document
          menuItems={menuData.slice(2)}
          sendDataToParent={handleReceiveDataFromChild}
          activeAcc={active}
        />
        <Sidebar_btn
          sendDataToParent={handleReceiveDataFromChild}
          href="/"
          image="dexuat_llv.png"
          title="Đề xuất lịch làm việc"
          active={true}
        />
        <Sidebar_btn
          sendDataToParent={handleReceiveDataFromChild}
          href="/"
          image="delete_dx_time.png"
          title="Dữ liệu đã xóa gần đây"
          active={true}
        />
        <Sidebar_btn
          sendDataToParent={handleReceiveDataFromChild}
          href="/"
          image="icon_set_sidebar.png"
          title="Cài đặt chung"
          active={true}
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

export default Sidebar_dexuat;
