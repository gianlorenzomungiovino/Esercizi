import { useState } from "react";

export function Counter({ initValue }) {
  const [counter, setCounter] = useState(initValue);

  function handleIncrement() {
    setCounter((value) => value + 1);
  }

  return (
    <div>
      <h2 style={{ fontSize: "28px", color: "violet" }}>{counter}</h2>
      <button onClick={handleIncrement}>Incrementa</button>
    </div>
  );
}
