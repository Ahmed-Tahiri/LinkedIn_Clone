import styles from "./Navbar.module.css";

import { LinkedinLogo } from "../Navbar/Navbar_Svgs/LI_Full_Logo_svg";
import { Article_SVG } from "../Navbar/Navbar_Svgs/Article_Svg";
import { People_SVG } from "../Navbar/Navbar_Svgs/People_Svg";
import { Learning_SVG } from "../Navbar/Navbar_Svgs/Learning_Svg";
import { Jobs_SVG } from "../Navbar/Navbar_Svgs/Jobs_Svg";
import { Games_SVG } from "../Navbar/Navbar_Svgs/Games_Svg";
import { GetApp_SVG } from "../Navbar/Navbar_Svgs/GetApp_Svg";
import { Buttons } from "./Login_Buttons/Login_Buttons";

let Navbar = () => {
  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.logo_Container}>
          <a href="/">
            <LinkedinLogo />
          </a>
        </div>
        <ul className={styles.Navbar_List}>
          <li className={styles.Nav_List_Items}>
            <a href="#" className={styles.Nav_Links}>
              <i>
                <Article_SVG />
              </i>

              <span className={styles.List_Item_Name}>Articles</span>
            </a>
          </li>
          <li className={styles.Nav_List_Items}>
            <a href="#" className={styles.Nav_Links}>
              <i>
                <People_SVG />
              </i>

              <span className={styles.List_Item_Name}>People</span>
            </a>
          </li>
          <li className={styles.Nav_List_Items}>
            <a href="#" className={styles.Nav_Links}>
              <i>
                <Learning_SVG />
              </i>

              <span className={styles.List_Item_Name}>Learning</span>
            </a>
          </li>
          <li className={styles.Nav_List_Items}>
            <a href="#" className={styles.Nav_Links}>
              <i>
                <Jobs_SVG />
              </i>

              <span className={styles.List_Item_Name}>Jobs</span>
            </a>
          </li>
          <li className={styles.Nav_List_Items}>
            <a href="#" className={styles.Nav_Links}>
              <i>
                <Games_SVG />
              </i>

              <span className={styles.List_Item_Name}>Games</span>
            </a>
          </li>
          <li className={styles.Nav_List_Items}>
            <a href="#" className={styles.Nav_Links}>
              <i>
                <GetApp_SVG />
              </i>

              <span className={styles.List_Item_Name}>Get the app</span>
            </a>
          </li>
        </ul>
        <Buttons />
      </nav>
    </>
  );
};
export { Navbar };
