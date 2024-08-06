import React, { useEffect } from "react";
import styles from "./Slider_Section.module.css";
import { RiArrowRightWideLine, RiArrowLeftWideLine } from "react-icons/ri";
import { Live_Call_Slide } from "./Slides/Live_Slide";
import { Messaging_Slide } from "./Slides/Messaging_Slide";
import { People_Slide } from "./Slides/People_Slide";

const Slider = () => {
  let buttons_handle_func;
  let direction;

  useEffect(() => {
    const slider_Items = document.querySelector(`.${styles.Slider_Section}`);
    const right_btn = document.getElementById(`${styles.right_Btn}`);
    const left_btn = document.getElementById(`${styles.left_Btn}`);

    const handleScroll = () => {
      const scrollAmount = slider_Items.clientWidth * direction;
      slider_Items.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    const updateButtonVisibility = () => {
      const maxScrollLeft = slider_Items.scrollWidth - slider_Items.clientWidth;
      left_btn.style.display = slider_Items.scrollLeft > 0 ? "block" : "none";
      right_btn.style.display =
        slider_Items.scrollLeft < maxScrollLeft ? "block" : "none";
    };

    buttons_handle_func = () => {
      handleScroll();
    };

    right_btn.addEventListener("click", () => {
      direction = 1;
      buttons_handle_func();
    });

    left_btn.addEventListener("click", () => {
      direction = -1;
      buttons_handle_func();
    });

    slider_Items.addEventListener("scroll", updateButtonVisibility);
    const preventDefault = (e) => e.preventDefault();
    slider_Items.addEventListener("wheel", preventDefault);
    updateButtonVisibility();
  }, []);

  return (
    <section className={styles.Slider_Section_Main_Container}>
      <button className={styles.slider_buttons} id={styles.left_Btn}>
        <RiArrowLeftWideLine />
      </button>
      <section className={styles.Slider_Section}>
        <People_Slide />
        <Messaging_Slide />
        <Live_Call_Slide />
      </section>
      <button className={styles.slider_buttons} id={styles.right_Btn}>
        <RiArrowRightWideLine />
      </button>
    </section>
  );
};

export { Slider };

// return () => {
//   right_btn.removeEventListener("click", buttons_handle_func);
//   left_btn.removeEventListener("click", buttons_handle_func);
//   slider_Items.removeEventListener("scroll", updateButtonVisibility);
//   slider_Items.removeEventListener("wheel", preventDefault);
// };
