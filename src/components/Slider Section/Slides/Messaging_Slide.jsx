import styles from "./Messaging_Slide.module.css";
import video_messaging_IMG from "../Images/video_calling_women.jpg";
let Messaging_Slide = () => {
  return (
    <div className={styles.Messaging_Slide}>
      <div className={styles.Slider_Text}>
        <h2 className={styles.Slider_Section_Heading}>
          Conversations today could lead to opportunity tomorrow
        </h2>
        <p className={styles.SubHeading}>
          Sending messages to people you know is a great way to strengthen
          relationships as you take the next step in your career
        </p>
      </div>

      <figure className={styles.Slider_Img_Container}>
        <img src={video_messaging_IMG} className={styles.Slider_Img} />
      </figure>
    </div>
  );
};

export { Messaging_Slide };
