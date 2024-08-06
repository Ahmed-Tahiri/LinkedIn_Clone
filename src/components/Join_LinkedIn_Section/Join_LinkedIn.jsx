import styles from "./Join_LinkedIn.module.css";
let Join_LinkedIn = () => {
  return (
    <section className={styles.Join_LinkedIn_Section}>
      <div className={styles.text_content}>
        <h2 className={styles.Section_Heading}>
          Join your colleagues, classmates, and friends on LinkedIn.
        </h2>
        <a href="/" className={styles.btn}>
          Get started
        </a>
      </div>
    </section>
  );
};

export { Join_LinkedIn };
