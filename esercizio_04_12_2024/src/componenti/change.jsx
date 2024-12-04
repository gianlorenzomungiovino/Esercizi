import { useState } from "react";

export function Change() {
  const [colore, setColore] = useState(null);
  const handleChange = () => {
    const colori = ["red", "green", "blue", "violet", "yellow"];
    const coloreSelezionato = colori[Math.floor(Math.random() * colori.length)];
    setColore(coloreSelezionato);
  };
  return (
    <div>
      <h1 style={{ color: colore }}>Testo Colorato</h1>
      <button onClick={handleChange}>Cliccami per cambiare colore!</button>
    </div>
  );
}
