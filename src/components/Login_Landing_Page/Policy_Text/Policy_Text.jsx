import styles from "./Policy_Text.module.css";

let Policy_Text = () => {
  return (
    <span className={styles.Policy_text}>
      By clicking Continue to join or sign in, you agree to LinkedIn’s
      {` `}{" "}
      <a
        href="https://pk.linkedin.com/legal/user-agreement?trk=homepage-basic_auth-button_user-agreement"
        target="_blank"
      >
        User Agreement,
      </a>{" "}
      <a
        href="https://pk.linkedin.com/legal/privacy-policy?trk=homepage-basic_auth-button_privacy-policy"
        target="_blank"
      >
        Privacy Policy,
      </a>{" "}
      and{` `}
      <a
        href="https://pk.linkedin.com/legal/cookie-policy?trk=homepage-basic_auth-button_cookie-policy"
        target="_blank"
      >
        Cookie Policy
      </a>
      .
    </span>
  );
};
export { Policy_Text };
