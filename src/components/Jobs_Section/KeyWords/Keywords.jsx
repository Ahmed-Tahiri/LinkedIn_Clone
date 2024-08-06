import { useEffect, useState } from "react";
import styles from "./Keywords.module.css";
import { RiArrowDownWideFill } from "react-icons/ri";
import { RiArrowUpWideFill } from "react-icons/ri";
let Keywords = () => {
  let [ShowBtnText, setShowBtnText] = useState(false);
  let [arrow, setArrow] = useState(false);
  useEffect(() => {
    document.querySelectorAll(`.${styles.btn_Keywords}`).forEach((element) => {
      element.classList.add(`${styles.Hide}`);
    });
  }, []);
  let Keywords_Show_Hide = () => {
    let ExtraWords = document.querySelectorAll(`.${styles.btn_Keywords}`);

    ExtraWords.forEach((element) => {
      if (ShowBtnText == false && arrow == false) {
        element.classList.remove(`${styles.Hide}`);
      } else if (ShowBtnText == true && arrow == true) {
        element.classList.add(`${styles.Hide}`);
      }
    });
  };

  let keyword_Text_Show_Hide = () => {
    if (ShowBtnText == false && arrow == false) {
      setShowBtnText(true);
      setArrow(true);
    } else if (ShowBtnText == true && arrow == true) {
      setShowBtnText(false);
      setArrow(false);
    }
  };
  let Show_Hide_Keywords_func = () => {
    Keywords_Show_Hide();
    keyword_Text_Show_Hide();
  };
  return (
    <div className={styles.Job_Keywords_Main_Div}>
      <h2 className={styles.Suggested_Search}>Suggested Searches</h2>
      <div className={styles.Jobs_Keyword_Div}>
        <a className={styles.Job_Name} href="#">
          Engineering
        </a>
        <a className={styles.Job_Name} href="#">
          Business Development
        </a>
        <a className={styles.Job_Name} href="#">
          Finance
        </a>
        <a className={styles.Job_Name} href="#">
          Administrative Assistant
        </a>
        <a className={styles.Job_Name} href="#">
          Retail Associate
        </a>
        <a className={styles.Job_Name} href="#">
          Customer Service
        </a>
        <a className={styles.Job_Name} href="#">
          Operations
        </a>
        <a className={styles.Job_Name} href="#">
          Information Technology
        </a>
        <a className={styles.Job_Name} href="#">
          Marketing
        </a>
        <a className={`${styles.Job_Name}`} href="#">
          Human Resources
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords} `} href="#">
          Healthcare Service
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Sales
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Program and Project Management
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Accounting
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Arts and Design
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Community and Social Services
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Consulting
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Education
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Entrepreneurship
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Legal
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Media and Communications
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Military and Protective Services
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Product Management
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Purchasing
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Quality Assurance
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Real Estate
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Research
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Support
        </a>
        <a className={`${styles.Job_Name}  ${styles.btn_Keywords}`} href="#">
          Administrative
        </a>
      </div>
      <button
        onClick={Show_Hide_Keywords_func}
        className={styles.Show_More_Button}
      >
        <span className={`${styles.btn_Text}`} id="btnText">
          {ShowBtnText ? `Show Less` : "Show More"}
        </span>
        {arrow ? (
          <RiArrowUpWideFill className={`${styles.upArrow}`} />
        ) : (
          <RiArrowDownWideFill className={`${styles.downArrow}`} />
        )}
      </button>
    </div>
  );
};

export { Keywords };
