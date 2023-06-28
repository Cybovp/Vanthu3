import React, { useState } from "react";
import styles from "./day_top.module.css";
import Image from "next/image";

interface ItemChoose {
  id: number;
  status: string;
}
interface ListItems {
  menuItems?: ItemChoose[];
}
const Day_top = (props: ListItems) => {
  const [click, setClick] = useState(false);
  const [choose, setChoose] = useState(0);
  const [status, setStatus] = useState("");
  const [since, setSince] = useState(false);
  const [to_day, setTo_day] = useState(false);
  const handleChooseStatus = (status: string, id: number) => {
    setStatus(status);
    setChoose(id);
  };
  const List = props.menuItems?.map((item, index) => {
    return (
      <p
        className={`${styles.search_item} ${
          choose === item.id ? styles.active_search_element : ""
        }`}
        data-value_choose={item.id}
        key={index}
        onClick={() => {
          handleChooseStatus(item.status, item.id);
        }}
      >
        {item.status}
      </p>
    );
  });
  return (
    <div className={`${styles.day_top}`}>
      <form className={`${styles.day_top}`} action="" method="POST">
        <div className={`${styles.incoming_text_top}`}>
          <input
            className={`${styles.incoming_text_top_input}`}
            type="text"
            placeholder="Nhập tên văn bản"
            name="ten_vb_search"
          />
        </div>
        <div
          className={`${styles.incoming_text_top}`}
          onClick={() => {
            setSince(true);
          }}
        >
          <input
            className={`${styles.incoming_text_top_input}`}
            type={since ? "date" : "text"}
            placeholder="Từ ngày"
            name="time_start"
          />
        </div>
        <div
          className={`${styles.incoming_text_top}`}
          onClick={() => {
            setTo_day(true);
          }}
        >
          <input
            className={`${styles.incoming_text_top_input}`}
            type={to_day ? "date" : "text"}
            placeholder="Đến ngày"
            name="time_end"
          />
        </div>
        {props.menuItems && (
          <div
            className={`${styles.incoming_text_top_select}`}
            onClick={() => {
              setClick(!click);
            }}
          >
            <div className={`${styles.btn_select}`} id="">
              <Image
                src={"/icon/arr_top.png"}
                width={50}
                height={50}
                alt=""
                className={`${styles.img_select}`}
              />
              <input
                type="hidden"
                className={`${styles.status_search}`}
                value=""
                name="trang_thai_search"
              />
              <p className={`${styles.search_choose}`}>
                {status !== "" ? status : "Trạng thái"}
              </p>
              <div
                className={`${styles.search_box} ${click ? styles.show : ""}`}
              >
                {List}
              </div>
            </div>
          </div>
        )}

        <div className={`${styles.incoming_text_top_btn}`}>
          <button type="submit" className={`${styles.btn_search}`}>
            <Image
              width={50}
              height={50}
              className={`${styles.btn_img}`}
              src={"/icon/i_search.png"}
              alt=""
            />
            <span>Tìm kiếm</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Day_top;
