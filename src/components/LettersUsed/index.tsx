import { Letter } from "../Letter";
import styles from "./styles.module.css";

export type LettersUsedProps = {
  value: string;
  correct: boolean;
};

type Props = {
  data: LettersUsedProps[];
};

export function LettersUsed({ data }: Props) {
  return (
    <div className={styles["letters-used"]}>
      <h5>Letras já utilizadas</h5>

      <div>
        {data.map((item, id) => (
          <Letter
            key={id}
            size="small"
            value={item.value}
            color={item.correct ? "correct" : "wrong"}
          />
        ))}
      </div>
    </div>
  );
};