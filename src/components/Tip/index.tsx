import styles from "./styles.module.css";
import tipSvg from "../../assets/tip.svg";

type Props = {
  tip: string;
};

export function Tip({ tip }: Props) {
  return (
    <div className={styles.tip}>
      <img src={tipSvg} alt="Dica" />

      <div>
        <h3>Dica</h3>
        <p>{tip}</p>
      </div>
    </div>
  )
};