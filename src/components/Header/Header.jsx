import styles from "./header.module.css";

import LogoIcon from "../../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={LogoIcon} />
        <strong className={styles.headerTitle}>Ignite Feed</strong>
      </div>
    </header>
  );
}
