import styles from "./Discover_Section.module.css";
import { Keywords } from "./KeyWords/Keywords";
let Discover_Section = () => {
  return (
    <section className={styles.Discover_Section}>
      <div className={styles.Discover_Text_Div}>
        <h2 className={styles.Discover_Heading}>
          Discover the best software tools
        </h2>
        <p className={styles.Discover_Section_text}>
          Connect with buyers who have first-hand experience to find the best
          products for you.
        </p>
      </div>
      <Keywords />
    </section>
  );
};

export { Discover_Section };
