import styles from "./styles.module.css";

import logo from "../../assets/logo.png";
import restart from "../../assets/restart.svg";

type Props = {
  max: number;
  current: number;
  onRestart: () => void;
};

export function Header({ max, current, onRestart }: Props) {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" />

      <header>
        <span>
          <strong>{current}</strong> de {max} tentativas
        </span>

        <button
          type="button"
          onClick={onRestart}
        >
          <img src={restart} alt="Reiniciar" />
        </button>
      </header>
    </div>
  )
};