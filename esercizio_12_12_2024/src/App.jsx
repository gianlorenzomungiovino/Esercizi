import "./App.css";
import { Dashboard } from "./componenti/Dashboard";
import { Login } from "./componenti/Login";
import { Registrazione } from "./componenti/Registrazione";

function App() {
  const isLogged = localStorage.getItem("isLogged");

  return (
    <>
      <Registrazione />
      {isLogged ? <Dashboard /> : <Login />}
      <Login />
    </>
  );
}

export default App;
