import styles from "./sideBar.module.css";
import Leafes from "../../assets/leafes.png";
import Womam from "../../assets/womam.png";
import { Button } from "../Button/Button";

export function SideBar() {
  return (
    <aside className={styles.wrapper}>
      <main className={styles.main}>
        <img src={Leafes} />
        <div className={styles.content}>
          <img src={Womam} alt="" />

          <strong>Leslie Alexander</strong>
          <span>UI Designer</span>
        </div>
      </main>
      <footer className={styles.footer}>
        <Button />
      </footer>
    </aside>
  );
}
