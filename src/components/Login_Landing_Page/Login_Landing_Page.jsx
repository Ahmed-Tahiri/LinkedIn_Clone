import { Google_Btn } from "./Google_Login_Button/Google_Button";
import styles from "./Login_Landing_Page.module.css";
import image from "./Login_Page_Image/Landing_Page_Image.svg";
import { Policy_Text } from "./Policy_Text/Policy_Text";
import { User_Login_Form } from "./Login_Form/Login_Form";
let Landing_Page = () => {
  return (
    <section className={styles.Main_Container}>
      <div className={styles.Main_text_content}>
        <h1 className={styles.landing_Page_Heading}>
          Welcome to your professional community
        </h1>
        <div className={styles.login_section}>
          <Google_Btn />
          <Policy_Text />
          <div className={styles.section_Divider_div}>
            {" "}
            <p className={styles.section_Divider_text}>or</p>
          </div>

          <User_Login_Form />
        </div>
      </div>
      <div className={styles.Main_Page_Image}>
        <figure>
          <img
            className={styles.Landing_Page_Image}
            src={image}
            alt="Login Landing Page Image"
          />
        </figure>
      </div>
    </section>
  );
};

export { Landing_Page };
