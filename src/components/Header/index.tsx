import styles from "./styles.module.css";

import logo from "../../assets/logo.png";
import restart from "../../assets/restart.svg";

export function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" />

      <header>
        <span>
          <strong>5</strong> de 10 tentativas
        </span>

        <button type="button">
          <img src={restart} alt="Reiniciar" />
        </button>
      </header>
    </div>
  )
};