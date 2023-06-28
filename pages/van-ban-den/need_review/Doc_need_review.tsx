import Day_top from "@/pages/components/day_top/Day_top";
import styles from "./doc_need_review.module.scss";
import React from "react";
import Table from "@/pages/components/incoming_doc_table/Table";

const Review_doc = () => {
  return (
    <div className={`${styles.body_general_management}`}>
      <Day_top />
      <Table />
    </div>
  );
};

export default Review_doc;
