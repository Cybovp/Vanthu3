import React from "react";
import styles from "./Layout.module.css";
import Header_main from "./main/header_main/Header_main";
import { Container } from "react-bootstrap";
import Avartar from "./avatar/Avartar";
import { ChangeSidebar } from "./sidebar/Change_Side";
import { useSelector } from "react-redux";

export default function Layout({ children }: any) {
  const sidebarVisible = useSelector((state: any) => state.sidebarVisible);
  console.log(sidebarVisible);

  return (
    <div className={`${styles.page}`}>
      <div
        className={`${styles.side_bar} ${sidebarVisible ? styles.visible : ""}`}
      >
        <div className={`${styles.general_management}`}>
          <div className={`${styles.profile}`}>
            <Avartar />
            <div className={`${styles.profile_content}`}>
              <p>Nguyễn Viết Hoàng</p>
              <p>Nhân viên</p>
            </div>
          </div>
          <ChangeSidebar />
        </div>
      </div>
      <div className={`${styles.main_right}`}>
        <Header_main />
        <Container>{children}</Container>
      </div>
    </div>
  );
}
