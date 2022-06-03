import styles from "./button.module.css";
import { PencilLine } from "phosphor-react";

export function Button() {
  return (
    <button className={styles.button}>
      <PencilLine />
      Editar seu perfil
    </button>
  );
}
