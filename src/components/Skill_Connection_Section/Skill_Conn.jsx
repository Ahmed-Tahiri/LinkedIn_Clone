import styles from "./Skill_Conn.module.css";
import { Skill_svg_data } from "./Section_SVGS/Skill_SVG";
import { Connection_SVG_data } from "./Section_SVGS/Connection_SVG";
import { IoMdArrowDropdown } from "react-icons/io";
import { Dropdown } from "bootstrap";

let Skill_Connection_Section = () => {
  let dropDown_Func = (props) => {
    let Dropdown_Container = document.querySelector(
      `.${styles.DropdownItems_container}`
    );

    Dropdown_Container.classList.toggle(`${styles.show}`);
  };
  return (
    <section className={styles.Skill_Connection_Section}>
      <div className={styles.Skill_Connection_Section_Content}>
        <div className={styles.Connect_Container}>
          <Connection_SVG_data />
          <div className={styles.Text_Content}>
            <h2 className={styles.Connect_Heading}>
              Connect with people who can help
            </h2>
            <a href="/" className={styles.Connect_btn}>
              Find people you know
            </a>
          </div>
        </div>
        <div className={styles.Skill_Container}>
          <Skill_svg_data />
          <div className={styles.Text_Content}>
            <h2 className={styles.Skill_Heading}>
              Learn the skills you need to succeed
            </h2>
            <div className={styles.DropDown_Div}>
              <button onClick={dropDown_Func} className={styles.Dropdown_btn}>
                <span className={styles.Dropdown_btn_text}>
                  Choose a topic to learn about
                </span>
                <span>
                  <IoMdArrowDropdown className={styles.downArrow} />
                </span>
              </button>
            </div>
            <div className={styles.DropdownItems_container}>
              <ul className={styles.DropdownItems}>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Business Analysis and strategy
                    </span>
                    <span className={styles.Course_Number}>1460+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Business Software and Tools
                    </span>
                    <span className={styles.Course_Number}>2140+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Career Development
                    </span>
                    <span className={styles.Course_Number}>590+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Diversity, Equity, and Inclusion (DEI)
                    </span>
                    <span className={styles.Course_Number}>300+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Finance and Accounting
                    </span>
                    <span className={styles.Course_Number}>280+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>Human Resources</span>
                    <span className={styles.Course_Number}>510+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Leadership and Management
                    </span>
                    <span className={styles.Course_Number}>1850+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>Marketing</span>
                    <span className={styles.Course_Number}>970+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Professional Development
                    </span>
                    <span className={styles.Course_Number}>1790+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Project Management
                    </span>
                    <span className={styles.Course_Number}>530+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>Sales</span>
                    <span className={styles.Course_Number}>290+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Small Business and Entrepreneurship
                    </span>
                    <span className={styles.Course_Number}>340+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Training and Education
                    </span>
                    <span className={styles.Course_Number}>310+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>AEC</span>
                    <span className={styles.Course_Number}>1460+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Animation and Illustration
                    </span>
                    <span className={styles.Course_Number}>1780+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>Audio and Music</span>
                    <span className={styles.Course_Number}>420+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>Graphics Design</span>
                    <span className={styles.Course_Number}>1020+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Motion Graphics and VFX
                    </span>
                    <span className={styles.Course_Number}>910+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>Photography</span>
                    <span className={styles.Course_Number}>1210+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Product and Manufacturing
                    </span>
                    <span className={styles.Course_Number}>1470+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>User Experience</span>
                    <span className={styles.Course_Number}>570+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>Video</span>
                    <span className={styles.Course_Number}>670+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Visualization and Real-Time
                    </span>
                    <span className={styles.Course_Number}>1330+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>Web Design</span>
                    <span className={styles.Course_Number}>540+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Artificial Intelligence(AI)
                    </span>
                    <span className={styles.Course_Number}>540+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>Cloud Computing</span>
                    <span className={styles.Course_Number}>1440+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>Cybersecurity</span>
                    <span className={styles.Course_Number}>980+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>Data Science</span>
                    <span className={styles.Course_Number}>1390+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Database Management
                    </span>
                    <span className={styles.Course_Number}>480+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>DevOps</span>
                    <span className={styles.Course_Number}>330+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>Hardware</span>
                    <span className={styles.Course_Number}>80+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>IT Help Desk</span>
                    <span className={styles.Course_Number}>360+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Mobile Development
                    </span>
                    <span className={styles.Course_Number}>490+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Network and System Administration
                    </span>
                    <span className={styles.Course_Number}>1530+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>
                      Software Development
                    </span>
                    <span className={styles.Course_Number}>360+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>IT Help Desk</span>
                    <span className={styles.Course_Number}>2720+ courses</span>
                  </a>
                </li>
                <li className={styles.coursesName}>
                  <a className={styles.courses_links} href="/">
                    <span className={styles.Course_title}>Web Development</span>
                    <span className={styles.Course_Number}>1750+ courses</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skill_Connection_Section };
