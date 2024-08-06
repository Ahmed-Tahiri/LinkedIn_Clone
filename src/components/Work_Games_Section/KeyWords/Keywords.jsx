import styles from "./Keywords.module.css";
let Keywords = () => {
  return (
    <div className={styles.Game_Keyword_Div}>
      <a className={styles.Game_Name} href="#">
        Pinpoint
      </a>
      <a className={styles.Game_Name} href="#">
        Queens
      </a>
      <a className={styles.Game_Name} href="#">
        Crossclimb
      </a>
    </div>
  );
};
export { Keywords };
