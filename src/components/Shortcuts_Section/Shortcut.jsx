import styles from "./Shortcut.module.css";
import { LinkedinLogo } from "./LinkedInLogo/LI_Full_Logo_svg";
import { General_Sub_Section } from "./Shortcut_sub_container/General";
import { Browser_LinkedIn_Sub_Container } from "./Shortcut_sub_container/BrowserLinkedIn";
import { BusinessSolution_Sub_Container } from "./Shortcut_sub_container/BusinessSolution";
import { Directories_Sub_Container } from "./Shortcut_sub_container/Directories";
let Shortcut = () => {
  return (
    <section className={styles.Shortcut_Section}>
      <span className={styles.LinkedinLogo}>
        <LinkedinLogo />
      </span>
      <div className={styles.Shortcuts_Main_Container}>
        <General_Sub_Section />
        <Browser_LinkedIn_Sub_Container />
        <BusinessSolution_Sub_Container />
        <Directories_Sub_Container />
      </div>
    </section>
  );
};
export { Shortcut };
