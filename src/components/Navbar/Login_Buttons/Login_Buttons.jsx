import styles from "./Login_Buttons.module.css";
let Buttons = () => {
  return (
    <div className={`${styles.Buttons_Container}`}>
      <button>Join now</button>
      <button>Sign in</button>
    </div>
  );
};
export { Buttons };
