import styles from "./Post_Job.module.css";

let Post_Job = () => {
  return (
    <section className={styles.Post_Job_Section}>
      <div className={styles.Post_Job_Main_Container}>
        <div className={styles.Post_Job_Section_Text}>
          <h2 className={styles.Post_Job_Section_Heading}>
            Post your job for millions of people to see
          </h2>
        </div>
        <div className={styles.Post_Job_Btn_Div}>
          <button className={styles.Post_Job_Btn}>Post a Job</button>
        </div>
      </div>
    </section>
  );
};

export { Post_Job };
