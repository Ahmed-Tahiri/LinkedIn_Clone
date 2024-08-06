import styles from "./Sub_Container_Styling.module.css";
let General_Sub_Section = () => {
  return (
    <div className={styles.Shortcuts_Sub_Container}>
      <h3 className={styles.Shortcut_Heading}>General</h3>
      <ul className={styles.Shortcut_List}>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Sign Up
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Help Center
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            About
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Press
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Blog
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Careers
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Developers
          </a>
        </li>
      </ul>
    </div>
  );
};
export { General_Sub_Section };
