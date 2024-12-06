import { useState } from "react";

export function Somma() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const changeNum1 = (event) => {
    setNum1(Number(event.target.value));
  };

  const changeNum2 = (event) => {
    setNum2(Number(event.target.value));
  };

  return (
    <div>
      <input type="number" value={num1} onChange={changeNum1} />;
      <input type="number" value={num2} onChange={changeNum2} />;
      <h2>Somma: {num1 + num2}</h2>
    </div>
  );
}
