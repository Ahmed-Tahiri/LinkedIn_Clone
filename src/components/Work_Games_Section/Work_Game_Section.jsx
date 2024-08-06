import styles from "./Work_Game_Section.module.css";
import { Keywords } from "./KeyWords/Keywords";
let Game_Section = () => {
  return (
    <section className={styles.Game_Section}>
      <div className={styles.Game_Text_Div}>
        <h2 className={styles.Game_Heading}>Keep your mind sharp with games</h2>
        <p className={styles.Game_text}>
          Take a break and reconnect with your network through quick daily
          games.
        </p>
      </div>
      <Keywords />
    </section>
  );
};

export { Game_Section };
