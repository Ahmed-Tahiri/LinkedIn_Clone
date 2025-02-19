import styles from "./Jobs_Svg.module.css";

let Jobs_SVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      fill="none"
      focusable="false"
      className={`lazy-loaded ${styles.Jobs_SVG}`}
      aria-busy="false"
    >
      <path
        d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
export { Jobs_SVG };
