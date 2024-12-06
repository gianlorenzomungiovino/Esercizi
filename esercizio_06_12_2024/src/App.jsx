import { useState } from "react";
import "./App.css";
import { Semaforo } from "./componenti/Semaforo";
import { useEffect } from "react";

function App() {
  const [coloreAttuale, setColoreAttuale] = useState("red");

  useEffect(() => {
    const intervallo = setTimeout(() => {
      console.log("qualcosa");
    }, 1000);
    return () => {
      clearInterval(intervallo);
    };
  }, []);

  function cambiaColore() {
    if (coloreAttuale === "red") {
      setColoreAttuale("yellow");
    } else if (coloreAttuale === "yellow") {
      setColoreAttuale("green");
    } else {
      setColoreAttuale("red");
    }
  }

  return (
    <>
      <Semaforo color={coloreAttuale} />
      <button onClick={cambiaColore} style={{ maxWidth: "100px" }}>
        Cambia colore!
      </button>
    </>
  );
}

export default App;
