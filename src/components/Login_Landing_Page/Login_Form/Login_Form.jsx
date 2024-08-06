import { useState } from "react";
import styles from "./Login_Form.module.css";

let User_Login_Form = () => {
  let [visible, setVisibility] = useState(false);
  let visibility_toggle_Btn = () => {
    return setVisibility((visible) => !visible);
  };
  let Form_Event = (event) => {
    return event.preventDefault();
  };
  return (
    <div className={styles.Sign_In_Form}>
      <form onSubmit={Form_Event} autoComplete="off">
        <div className={styles.userInputs}>
          <div className={styles.Email_Div}>
            <label htmlFor="email_Input" className={styles.Input_Labels}>
              Email or phone
            </label>
            <div className={styles.Email_Input_Div}>
              <input
                type="text"
                id="email_Input"
                className={styles.Sign_In_Inputs}
                spellCheck="false"
                required
              />
            </div>
          </div>
          <div className={styles.Password_Div}>
            <label htmlFor="Login_Password" className={styles.Input_Labels}>
              Password
            </label>
            <div className={styles.Password_Input_Div}>
              <input
                type={visible ? "text" : "password"}
                id="Login_Password"
                className={styles.Sign_In_Inputs}
                spellCheck="false"
                required
              />
              <button
                type="submit"
                className={styles.Password_Button}
                onClick={visibility_toggle_Btn}
              >
                {visible ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.sign_In_options}>
          <a href="#" className={styles.forgot_Password}>
            Forgot password?
          </a>
          <button type="submit" className={styles.Sign_In_Button}>
            Sign in
          </button>
        </div>
        <p className={styles.Join_LinkedIn}>
          &nbsp;New to Linkedin?&nbsp;<a href="#">Join now</a>
        </p>
      </form>
    </div>
  );
};
export { User_Login_Form };
