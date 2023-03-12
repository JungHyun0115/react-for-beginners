import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <h2 className={styles.title}>Welcome back!</h2>
      <Button text={"New"} />
    </div>
  );
}

export default App;
