import "./App.css";
import Dashboard from "./components/dashboard";
import Saluto from "./components/saluto";

function App() {
  const arrNomi = ["Sergio", "Massimo", "Giuseppe", "Tommaso", "Agata"];

  const User = {
    nome: "marco",
    cognome: "filannino",
    telefono: 1238546732,
    email: "mf@email.com",
  };

  return (
    <>
      <h1>Hello, World!</h1>
      {arrNomi.map((x, index) => (
        <Saluto
          nome={x}
          key={index}
          class={index % 2 === 0 ? "red" : "green"}
        />
      ))}
      <input type="text" />

      {User ? (
        <Dashboard
          nome={User.nome}
          cognome={User.cognome}
          telefono={User.telefono}
          email={User.email}
        />
      ) : (
        <h1>Dati utente non esistenti</h1>
      )}
    </>
  );
}

export default App;
