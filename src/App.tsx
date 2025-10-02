import styles from "./App.module.css";

import { Tip } from "./components/Tip";
import { Header } from "./components/Header";
import { Letter } from "./components/Letter";

export default function App() {
  function handleRestart() {
    console.log("Reiniciar");
  };

  return (
    <div className={styles.container}>
      <main>
        <Header
          max={10}
          current={5}
          onRestart={handleRestart}
        />

        <Tip tip="Uma das linguagens de programação mais utilizadas no mundo!!" />

        <Letter value="R" />
        <Letter value="E" />
        <Letter value="A" />
        <Letter value="C" />
        <Letter value="T" />
      </main>
    </div>
  )
};