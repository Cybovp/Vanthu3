import Image from "next/image";
import styles from "./recent_dispatch.module.css";
import React from "react";
import Item_dispatch from "./item_dispatch/Item_dispatch";

const Recent_dispatch = () => {
  return (
    <>
      <h3 className={`${styles.body_row_title}`}>Công văn gần đây</h3>
      <div className={`${styles.body_row_box}`}>
        <div className={`${styles.body_row_box_list}`}>
          <ul className={styles.ul_box}>
            <Item_dispatch name_doc="Phiếu đăng ký" />
            <Item_dispatch name_doc="Phiếu đăng ký" />
            <Item_dispatch name_doc="BIÊN BẢN HỌP TUẦN PHÒNG 3 - HỌP NGÀY 28/02/2023" />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Recent_dispatch;
