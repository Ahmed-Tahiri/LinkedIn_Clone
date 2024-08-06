import styles from "./In_Nav_Section.module.css";
import { RiArrowRightWideLine } from "react-icons/ri";
import { RightArrow } from "./RightArrow/RightArrow_svg";
let LinkedIn_Nav_Section = () => {
  return (
    <section className={styles.LinkedIn_Nav_Section}>
      <div className={styles.LinkedIn_Nav_Section_Content}>
        <div className={styles.Text_Content}>
          <h2 className={styles.Section_Heading}>Who is LinkedIn for?</h2>
          <h3 className={styles.Section_Sub_Heading}>
            Anyone looking to navigate their professional life.
          </h3>
          <ul className={styles.section_list}>
            <li className={styles.list_Items}>
              <a href="/" className={styles.list_Items_Links}>
                <span className={styles.List_Item_Name}>
                  Find a coworker or classmate
                </span>
                <span className={styles.Icon}>
                  <RightArrow />
                </span>
              </a>
            </li>
            <li className={styles.list_Items}>
              <a href="/" className={styles.list_Items_Links}>
                <span className={styles.List_Item_Name}>Find a new job</span>
                <span className={styles.Icon}>
                  <RightArrow />
                </span>
              </a>
            </li>
            <li className={styles.list_Items}>
              <a href="/" className={styles.list_Items_Links}>
                <span className={styles.List_Item_Name}>
                  Find a course or training
                </span>
                <span className={styles.Icon}>
                  <RightArrow />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <img
          src="https://static.licdn.com/aero-v1/sc/h/292yd0en6qdvkbezeuj71yu4y"
          className={styles.Image_Container}
        />
      </div>
    </section>
  );
};
export { LinkedIn_Nav_Section };
