import Day_top from "@/pages/components/day_top/Day_top";
import styles from "./doc_new.module.scss";
import React from "react";
import Table from "@/pages/components/incoming_doc_table/Table";
import { List_docs, listStatus } from "./Array_choose";

const Been_processed = () => {
  return (
    <div className={`${styles.body_general_management}`}>
      <Day_top menuItems={listStatus} />
      <Table listdocs={List_docs} />
    </div>
  );
};

export default Been_processed;
