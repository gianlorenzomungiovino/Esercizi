import { useEffect } from "react";
import { useState } from "react";

export function Hello() {
  const [nome, setNome] = useState("");
  const [mail, setMail] = useState("");
  const [error, setError] = useState("");

  //   useEffect(() => {
  //     setTimeout(() => {
  //       console.log(nome);
  //     }, 3000);
  //   }, [nome]);

  const handleChangeNome = (event) => {
    const evento = event.target.value;

    if (evento.length > 10) {
      setNome(evento.toUpperCase());
    }
  };

  const handleMailSubmit = (event) => {
    const mail = event.target.value;
    if (!mail.includes(".") || !mail.includes("@")) {
      setError("Email non valida");
    } else {
      setError("");
      setMail(mail);
    }
  };

  return (
    <>
      <div>
        <input type="text" value={nome} onChange={handleChangeNome} />
        <p>Ciao {nome || "utente sconosciuto"}!</p>
        <hr />
        <input type="text" value={mail} onChange={handleMailSubmit} />
        <p>{error || mail}</p>
        <button onClick={handleMailSubmit}>Invia</button>
      </div>
    </>
  );
}
