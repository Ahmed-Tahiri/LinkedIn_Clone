import styles from "./Articles_Section.module.css";
import { Keywords } from "./KeyWords/Keywords";
let Articles_Section = () => {
  return (
    <section className={styles.Article_Section}>
      <div className={styles.Articles_Text_Div}>
        <h2 className={styles.Article_Heading}>
          Explore collaborative articles
        </h2>
        <p className={styles.Article_text}>
          We’re unlocking community knowledge in a new way. Experts add insights
          directly into each article, started with the help of AI.
        </p>
      </div>
      <Keywords />
    </section>
  );
};

export { Articles_Section };
