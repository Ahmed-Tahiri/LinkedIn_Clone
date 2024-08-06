import styles from "./LoginPage.module.css";
import React, { useEffect } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Landing_Page } from "./Login_Landing_Page/Login_Landing_Page";
import { Articles_Section } from "./Articles_Section/Articles_Section";
import { Jobs_Section } from "./Jobs_Section/Jobs_Section";
import { Post_Job } from "./Post_Job_Section/Post_Job";
import { Discover_Section } from "./Discover_Section/Discover_Section";
import { Game_Section } from "./Work_Games_Section/Work_Game_Section";
import { Slider } from "./Slider Section/Slider_Section";
import { Skill_Connection_Section } from "./Skill_Connection_Section/Skill_Conn";
import { LinkedIn_Nav_Section } from "./LinkedIn_Navigation_Section/In_Nav_Section";
import { Join_LinkedIn } from "./Join_LinkedIn_Section/Join_LinkedIn";
import { Shortcut } from "./Shortcuts_Section/Shortcut";
import { Footer_Content } from "./Footer/Footer_Content";
let Login = (props) => {
  useEffect(() => {
    document.title = "LinkedIn: Log In or Sign Up";
  }, []);

  return (
    <>
      <header className={styles.Header_Container}>
        <Navbar />
      </header>
      <main>
        <Landing_Page />
        <Articles_Section />
        <Jobs_Section />
        <Post_Job />
        <Discover_Section />
        <Game_Section />
        <Slider />
        <Skill_Connection_Section />
        <LinkedIn_Nav_Section />
        <Join_LinkedIn />
        <Shortcut />
      </main>
      <footer className={styles.Footer_Container}>
        <Footer_Content />
      </footer>
    </>
  );
};

export { Login };
