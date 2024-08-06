import styles from "./Footer_Content.module.css";
import { DownArrow } from "./LinkedIn Logo/Icons/DownArrow";
import { LinkedinLogo } from "./LinkedIn Logo/LI_Full_Logo_svg";
let Footer_Content = () => {
  let Languages_func_handler = () => {
    let Languages_container = document.querySelector(
      `.${styles.Languages_List}`
    );
    Languages_container.classList.toggle(`${styles.show_div}`);
  };
  return (
    <ul className={styles.FooterItems}>
      <li className={styles.FooterItem}>
        <span className={styles.LinkedIn_Logo}>
          <LinkedinLogo />
        </span>
        <span className={styles.copyright_Text}>
          &copy; {new Date().getFullYear()}
        </span>
      </li>
      <li className={styles.FooterItem}>
        <a href="/" className={styles.FooterItem_Link}>
          About
        </a>
      </li>
      <li className={styles.FooterItem}>
        <a href="/" className={styles.FooterItem_Link}>
          Accessibility
        </a>
      </li>
      <li className={styles.FooterItem}>
        <a href="/" className={styles.FooterItem_Link}>
          User Agreement
        </a>
      </li>
      <li className={styles.FooterItem}>
        <a href="/" className={styles.FooterItem_Link}>
          Privacy Policy
        </a>
      </li>
      <li className={styles.FooterItem}>
        <a href="/" className={styles.FooterItem_Link}>
          Cookie Policy
        </a>
      </li>
      <li className={styles.FooterItem}>
        <a href="/" className={styles.FooterItem_Link}>
          Copyright Policy
        </a>
      </li>
      <li className={styles.FooterItem}>
        <a href="/" className={styles.FooterItem_Link}>
          Brand Policy
        </a>
      </li>
      <li className={styles.FooterItem}>
        <a href="/" className={styles.FooterItem_Link}>
          Guest Controls
        </a>
      </li>
      <li className={styles.FooterItem}>
        <a href="/" className={styles.FooterItem_Link}>
          Community Guidelines
        </a>
      </li>
      <li className={styles.FooterItem}>
        <div className={styles.Language_LI_Div}>
          <ul className={styles.Languages_List}>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>العربية (Arabic)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>Čeština (Czech)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>Dansk (Danish)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>Deutsch (German)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>English (English)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>Español (Spanish)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>Français (French)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong> हिंदी (Hindi)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>Bahasa Indonesia (Indonesian)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>Italiano (Italian)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>日本語 (Japanese)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong> 한국어 (Korean)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>Bahasa Malaysia (Malay)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong> Nederlands (Dutch)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong> Norsk (Norwegian)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>Polski (Polish)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>Português (Portuguese)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>Română (Romanian)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>Русский (Russian)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>Svenska (Swedish)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong> ภาษาไทย (Thai)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong> Tagalog (Tagalog)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>Türkçe (Turkish)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong> Українська (Ukrainian)</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>简体中文 (Chinese (Simplified))</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong> 正體中文 (Chinese (Traditional))</strong>
              </button>
            </li>
            <li className={styles.Language}>
              <button className={styles.Language_btn}>
                <strong>Română (Romanian)</strong>
              </button>
            </li>
          </ul>
          <button
            onClick={Languages_func_handler}
            className={styles.FooterItem_Btn}
          >
            <span className={styles.Language_Text}>Language</span>
            <span>
              <DownArrow />
            </span>
          </button>
        </div>
      </li>
    </ul>
  );
};
export { Footer_Content };
