import styles from "./Keywords.module.css";
let Keywords = () => {
  return (
    <div className={styles.Articles_Keyword_Div}>
      <a className={styles.Article_Name} href="#">
        Marketing
      </a>
      <a className={styles.Article_Name} href="#">
        Public Administration
      </a>
      <a className={styles.Article_Name} href="#">
        Healthcare
      </a>
      <a className={styles.Article_Name} href="#">
        Engineering
      </a>
      <a className={styles.Article_Name} href="#">
        IT Services
      </a>
      <a className={styles.Article_Name} href="#">
        Sustainability
      </a>
      <a className={styles.Article_Name} href="#">
        Business Administration
      </a>
      <a className={styles.Article_Name} href="#">
        Telecommunications
      </a>
      <a className={styles.Article_Name} href="#">
        HR Management
      </a>
      <a className={styles.Article_Name} href="#">
        Show all
      </a>
    </div>
  );
};
export { Keywords };
