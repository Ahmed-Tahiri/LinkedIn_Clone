import { useEffect, useState } from "react";
import styles from "./Keywords.module.css";
import { RiArrowDownWideFill } from "react-icons/ri";
import { RiArrowUpWideFill } from "react-icons/ri";
let Keywords = () => {
  return (
    <div className={styles.Discover_Keywords_Main_Div}>
      <h2 className={styles.Suggested_Search}>Suggested Tools</h2>
      <div className={styles.Discover_Keyword_Div}>
        <a className={styles.Discover_Name} href="#">
          E-Commerce Platforms
        </a>
        <a className={styles.Discover_Name} href="#">
          CRM Software
        </a>
        <a className={styles.Discover_Name} href="#">
          Human Resources Management Systems
        </a>
        <a className={styles.Discover_Name} href="#">
          Recruiting Software
        </a>
        <a className={styles.Discover_Name} href="#">
          Sales Intelligence Software
        </a>
        <a className={styles.Discover_Name} href="#">
          Project Management Software
        </a>
        <a className={styles.Discover_Name} href="#">
          Help Desk Software
        </a>
        <a className={styles.Discover_Name} href="#">
          Social Networking Software
        </a>
        <a className={styles.Discover_Name} href="#">
          Desktop Publishing Software
        </a>
        <a className={styles.Discover_Name} href="#">
          Show All
        </a>
      </div>
    </div>
  );
};

export { Keywords };
