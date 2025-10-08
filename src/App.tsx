import styles from "./App.module.css";

import { useEffect, useState } from "react";
import { WORDS, type Challenge } from "./utils/words";

import { Tip } from "./components/Tip";
import { Header } from "./components/Header";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed, type LettersUsedProps } from "./components/LettersUsed";

export default function App() {
  const [score, setScore] = useState(0);
  const [letter, setLetter] = useState("");
  const [attempts, setAttempts] = useState(5);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]);

  function handleRestart() {
    console.log("Reiniciar");
  };

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];

    setChallenge(randomWord);
    setAttempts(0);
    setLetter("");
  };

  function handleConfirm() {
    if (!challenge) return;
    if (!letter.trim()) return alert("Digite uma letra");

    const value = letter.toUpperCase().trim();
    const exists = lettersUsed.find((item) => item.value.toUpperCase() === value);

    if (exists) return alert("Letra já utilizada" + value);

    const hits = challenge.word.toUpperCase().split("").filter((item) => item === value).length;
    const correct = hits > 0;
    const currentScore = score + hits;

    setLettersUsed((prev) => [...prev, { value, correct, id: Date.now() }]);
    setScore(currentScore);
    // setLettersUsed((prev) => [...prev, { value, correct: challenge.word.includes(value), id: Date.now() }]);

    setLetter("");
  };

  useEffect(() => {
    startGame();
  }, []);

  if (!challenge) return;

  return (
    <div className={styles.container}>
      <main>
        <Header
          max={10}
          current={attempts}
          onRestart={handleRestart}
        />

        <Tip
          tip={challenge.tip}
        />

        <div className={styles.word}>
          {challenge.word.split("").map((item, id) => (
            <Letter
              key={id}
              value={item}
            />
          ))}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            value={letter}
            placeholder="?"
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button
            title="Confirmar"
            onClick={handleConfirm}
          />
        </div>

        <LettersUsed
          data={lettersUsed}
        />
      </main>
    </div>
  )
};