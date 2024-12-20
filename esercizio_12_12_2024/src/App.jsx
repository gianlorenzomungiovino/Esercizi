// aggiungere una variabile che sommi i dati degli users dell'api con quelli di coloro che si registrano sul sito (quindi modificare Registrazione) e fare renderizzare tutto nella dashboard

import "./App.css";

import { UserProvider } from "./componenti/UserContext";
import { Registrazione } from "./componenti/Registrazione";
import { Login } from "./componenti/Login";
import { Dashboard } from "./componenti/Dashboard";

function App() {
  return (
    <UserProvider>
      <div className="wrapper">
        <Registrazione></Registrazione>
        <Login></Login>
      </div>
      <Dashboard></Dashboard>
    </UserProvider>
  );
}

export default App;
