import styles from "./GetApp_Svg.module.css";

let GetApp_SVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="laptop-medium"
      data-supported-dps="24x24"
      fill="currentColor"
      focusable="false"
      className={`lazy-loaded ${styles.GetApp_SVG}`}
      aria-busy="false"
    >
      <path d="M21 17V8c0-1.66-1.34-3-3-3H6C4.34 5 3 6.34 3 8v9H1v1c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-1h-2zM11 6h2v1h-2V6zm8 11h-5c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1H5V9c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v8z"></path>
    </svg>
  );
};
export { GetApp_SVG };
