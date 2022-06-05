import styles from "./sideBar.module.css";
import Leafes from "../../assets/leafes.png";
import Womam from "../../assets/womam.png";
import { Button } from "../Button/Button";
import { Avatar } from "../Avatar/Avatar";

export function SideBar() {
  return (
    <aside className={styles.wrapper}>
      <main className={styles.main}>
        <img className={styles.banner} src={Leafes} />
        <div className={styles.content}>
          <Avatar src={Womam} />

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
