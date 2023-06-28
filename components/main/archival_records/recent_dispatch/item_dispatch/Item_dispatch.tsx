import React from "react";
import styles from "./Item_dispatch.module.css";
import Image from "next/image";
import Link from "next/link";
interface ComponentsDispatch {
  id?: number;
  link?: string;
  name_doc?: string;
}
const Item_dispatch: React.FC<ComponentsDispatch> = (props) => {
  return (
    <li className={styles.li_box}>
      <Link
        target="_blank"
        className={`${styles.body_row_box_list_item}`}
        href=""
      >
        <Image
          src={"/icon/google-docs.png"}
          width={50}
          height={50}
          alt="box"
          className={styles.img_box}
        />
        <p className={`${styles.body_row_box_list_item_text}`}>
          {props.name_doc}
        </p>
      </Link>
    </li>
  );
};

export default Item_dispatch;
