import styles from "./People_Slide.module.css";
import ahmedIMG from "../Images/ahmed_tahiri.png";
let People_Slide = () => {
  return (
    <div className={styles.People_Slide}>
      <div className={styles.Slider_Text}>
        <h2 className={styles.Slider_Section_Heading}>
          Let the right people know you’re open to work
        </h2>
        <p className={styles.SubHeading}>
          With the Open To Work feature, you can privately tell recruiters or
          publicly share with the LinkedIn community that you are looking for
          new job opportunities.
        </p>
      </div>

      <figure className={styles.Slider_Img_Container}>
        <img src={ahmedIMG} className={styles.Slider_Img} />
      </figure>
    </div>
  );
};
export { People_Slide };
