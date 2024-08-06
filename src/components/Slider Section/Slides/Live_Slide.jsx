import styles from "./Live_Slide.module.css";
import Live_IMG from "../Images/live_image.png";
let Live_Call_Slide = () => {
  return (
    <div className={styles.Live_Slide}>
      <div className={styles.Slider_Text}>
        <h2 className={styles.Slider_Section_Heading}>
          Stay up to date on your industry
        </h2>
        <p className={styles.SubHeading}>
          From live videos, to stories, to newsletters and more, LinkedIn is
          full of ways to stay up to date on the latest discussions in your
          industry.
        </p>
      </div>

      <figure className={styles.Slider_Img_Container}>
        <img src={Live_IMG} className={styles.Slider_Img} />
      </figure>
    </div>
  );
};

export { Live_Call_Slide };
