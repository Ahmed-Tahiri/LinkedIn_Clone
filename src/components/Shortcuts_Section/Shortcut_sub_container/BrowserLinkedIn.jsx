import styles from "./Sub_Container_Styling.module.css";
let Browser_LinkedIn_Sub_Container = () => {
  return (
    <div className={styles.Shortcuts_Sub_Container}>
      <h3 className={styles.Shortcut_Heading}>Browse LinkedIn</h3>
      <ul className={styles.Shortcut_List}>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Learning
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Jobs
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Games
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Salary
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Mobile
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Services
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Products
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Top Companies Hub
          </a>
        </li>
      </ul>
    </div>
  );
};
export { Browser_LinkedIn_Sub_Container };
