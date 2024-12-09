import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  const [nome, setNome] = useState("");

  function handleInputName(event) {
    const value = event.target.value;
    setNome(value);
  }

  return (
    <>
      <div>
        <input
          type="text"
          onChange={handleInputName}
          placeholder="Scrivi il tuo nome..."
        />
        <Welcome name={nome} />
      </div>
    </>
  );
}
