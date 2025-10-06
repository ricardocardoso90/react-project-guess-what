import { Letter } from "../Letter";
import styles from "./styles.module.css";

export function LettersUsed() {
  return (
    <div className={styles["letters-used"]}>
      <h5>Letras já utilizadas</h5>

      <div>
        <Letter value="X" size="small" color="default" />
        <Letter value="Y" size="small" color="correct" />
        <Letter value="Z" size="small" color="wrong" />
      </div>
    </div>
  );
};