import React from "react";
import styles from "./Archival_recorders.module.css";
import Today_dispatch from "./today_dispatch/Today_dispatch";
import Recent_dispatch from "./recent_dispatch/Recent_dispatch";
const Archival_records = () => {
  return (
    <div className={`${styles.body_main_content}`}>
      {/* Today's Dispatch */}
      <div className={`${styles.body_row}`}>
        <Today_dispatch />
      </div>
      {/* Recent Dispatches */}
      <div className={`${styles.body_row}`}>
        <Recent_dispatch />
      </div>
    </div>
  );
};
export default Archival_records;
