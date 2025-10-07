import styles from "./App.module.css";

import { useEffect, useState } from "react";
import { WORDS, type Challenge } from "./utils/words";

import { Tip } from "./components/Tip";
import { Header } from "./components/Header";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed } from "./components/LettersUsed";

export default function App() {
  const [letter, setLetter] = useState("");
  const [attempts, setAttempts] = useState(5);
  const [challenge, setChallenge] = useState<Challenge | null>(null);

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
          tip={challenge?.tip}
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
            placeholder="?"
          />
          <Button title="Confirmar" />
        </div>

        <LettersUsed />
      </main>
    </div>
  )
};