import styles from "./Sub_Container_Styling.module.css";
let BusinessSolution_Sub_Container = () => {
  return (
    <div className={styles.Shortcuts_Sub_Container}>
      <h3 className={styles.Shortcut_Heading}>Business Solutions</h3>
      <ul className={styles.Shortcut_List}>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Talent
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Marketing
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Sales
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Learning
          </a>
        </li>
      </ul>
    </div>
  );
};
export { BusinessSolution_Sub_Container };
