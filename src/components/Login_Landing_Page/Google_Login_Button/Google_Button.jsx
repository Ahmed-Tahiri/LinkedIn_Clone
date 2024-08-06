import styles from "./Google_Button.module.css";
import { FcGoogle } from "react-icons/fc";

let Google_Btn = () => {
  return (
    <button className={styles.Google_Btn}>
      <i>
        <FcGoogle />
      </i>
      <span className={styles.Google_Text}>Continue with Google</span>
    </button>
  );
};
export { Google_Btn };
