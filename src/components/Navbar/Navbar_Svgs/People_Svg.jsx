import styles from "./People_Svg.module.css";

let People_SVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      fill="none"
      focusable="false"
      className={`lazy-loaded ${styles.People_SVG}`}
      aria-busy="false"
    >
      <path
        d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export { People_SVG };
