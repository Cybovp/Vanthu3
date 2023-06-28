import React from "react";
import styles from "./Table.module.css";
import Image from "next/image";
interface ItemDoc {
  id: number;
  num_doc: string;
  name_doc: string;
  received_date: string;
  sender: string;
  position: string;
  abstract: string;
  status: string;
}
interface ListDocs {
  listdocs?: ItemDoc[];
}
const Table: React.FC<ListDocs> = ({ listdocs }) => {
  const Listdocs = listdocs?.map((item, index) => {
    return (
      <div className={`${styles.table_row} ${styles.row_color}`} key={index}>
        <p className={`${styles.table_element} ${styles.size_14}`}>
          {index + 1}
        </p>
        <p className={`${styles.table_element} ${styles.size_14}`}>
          {item.num_doc}
        </p>
        <div className={`${styles.table_element}`}>
          <a href="" className={`${styles.text_xanh_kochan} ${styles.size_14}`}>
            {item.name_doc}
          </a>
        </div>
        <p className={`${styles.table_element} ${styles.size_14}`}>
          {item.received_date}
        </p>
        <div className={styles.table_element}>
          <p className={styles.size_14}>{item.sender}</p>
          <p className={`${styles.text_xanh_kochan} ${styles.size_14}`}>
            {item.position}
          </p>
        </div>
        <div
          className={`${styles.table_element} ${styles.text_xanh_kochan} ${styles.size_14} ${styles.congty}`}
        >
          <p>{item.abstract}</p>
        </div>
        <div className={`${styles.table_element}`}>
          <div style={{ width: "70%", textAlign: "center" }}>
            <p style={{ color: "#63b814", fontSize: "14px" }}>{item.status}</p>
          </div>
          <button className={`${styles.table_btn}`}>
            <Image
              src={"/icon/i_share.png"}
              width={21}
              height={23}
              alt="Chuyen tiep"
            />
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className={`${styles.incoming_doc_table}`}>
      <div className={`${styles.table}`}>
        <div className={`${styles.table_row} ${styles.table_top}`}>
          <p className={`${styles.table_element}`}>Stt</p>
          <p className={`${styles.table_element}`}>Số văn bản</p>
          <p className={`${styles.table_element}`}>Tên văn bản</p>
          <p className={`${styles.table_element}`}>Ngày nhận</p>
          <p className={`${styles.table_element}`}>Nơi gửi</p>
          <p className={`${styles.table_element}`}>Trích yếu</p>
          <p className={`${styles.table_element}`}>Trạng thái</p>
        </div>
        {Listdocs}
      </div>
    </div>
  );
};

export default Table;
