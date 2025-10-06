import styles from "./styles.module.css";

type Props = {
  value?: string;
  size?: "default" | "small";
  color?: "default" | "correct" | "wrong";
};

export function Letter({ value = "", size = "default", color = "default" }: Props) {
  return (
    <div className={`
      ${styles.letter} 
      ${size === "small" && styles["letter-small"]} 
      ${color === "correct" && styles["letter-correct"]} 
      ${color === "wrong" && styles["letter-wrong"]}`
    }>
      <span>{value}</span>
    </div>
  )
};