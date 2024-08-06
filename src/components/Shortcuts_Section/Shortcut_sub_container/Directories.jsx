import styles from "./Sub_Container_Styling.module.css";
let Directories_Sub_Container = () => {
  return (
    <div className={styles.Shortcuts_Sub_Container}>
      <h3 className={styles.Shortcut_Heading}>Directories</h3>
      <ul className={styles.Shortcut_List}>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Members
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Jobs
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Companies
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Featured
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Learning
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Posts
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Articles
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            Schools
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            News
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            News Letters
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
            Advice
          </a>
        </li>
        <li className={styles.Shortcut_List_Item}>
          <a href="/" className={styles.Shortcut_List_Item_Link}>
            People Search
          </a>
        </li>
      </ul>
    </div>
  );
};
export { Directories_Sub_Container };
