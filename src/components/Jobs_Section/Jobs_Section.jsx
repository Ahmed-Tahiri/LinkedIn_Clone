import styles from "./Jobs_Section.module.css";
import { Keywords } from "./KeyWords/Keywords";
let Jobs_Section = () => {
  return (
    <section className={styles.Jobs_Section}>
      <div className={styles.Jobs_Text_Div}>
        <h2 className={styles.Jobs_Heading}>
          Find the right job or internship for you
        </h2>
      </div>
      <Keywords />
    </section>
  );
};

export { Jobs_Section };
