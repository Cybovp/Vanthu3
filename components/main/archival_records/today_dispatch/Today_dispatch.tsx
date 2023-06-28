import Image from "next/image";
import styles from "./today_dispatch.module.scss";
import React from "react";
import Box_element from "./box_element/Box_element";
import { listTemps } from "./box_element/Array_boxs";

const Today_dispatch = () => {
  const ListItems = listTemps?.map((item, index) => {
    return (
      <Box_element
        element_number={item.num}
        name_box={item.nametemp}
        temp={item.temp}
        key={index}
      />
    );
  });

  return (
    <>
      <h3 className={`${styles.title}`}>Hôm nay</h3>
      <div className={`${styles.container_list}`}>
        {/* list left */}
        <div className={`${styles.list_box_right}`}>
          <div className={`${styles.div_block_list_box}`}>{ListItems}</div>
        </div>
        {/* right */}
        <div className={`${styles.box_important}`}>
          <div className={`${styles.element_part}`}>
            <h2 className={`${styles.element_number}`}>0</h2>
            <p className={`${styles.element_title}`}>Văn bản cần được duyệt</p>
            <div className={`${styles.element_success}`}>
              <p className={`${styles.element_temp}`}>Hoàn thành : 100%</p>
              <div className={`${styles.progress}`}>
                <div
                  className={`${styles.progress_bar}`}
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className={`${styles.element_part}`}>
            <div className={`${styles.element_part_top}`}>
              <Image
                src={"/icon/top_warning.png"}
                width={50}
                height={50}
                alt="Avatar"
              />
              <p className={`${styles.text_top}`}>
                Truy cập duyệt văn bản ngay!
              </p>
            </div>
            <a href="/vb-can-duyet.html">
              <div className={`${styles.element_part_bottom}`}>
                <Image
                  src={"/icon/icon_document.png"}
                  width={50}
                  height={50}
                  alt="Avatar"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Today_dispatch;
