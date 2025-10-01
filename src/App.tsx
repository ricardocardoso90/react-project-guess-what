import styles from "./App.module.css";
import { Header } from "./components/Header";

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
      </main>
    </div>
  )
};