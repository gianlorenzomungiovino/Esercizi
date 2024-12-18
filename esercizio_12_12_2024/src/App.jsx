import { useState } from "react";
import "./App.css";

import { useEffect } from "react";
import { UserProvider } from "./componenti/UserContext";
import { Registrazione } from "./componenti/Registrazione";
import { Login } from "./componenti/Login";
import { Dashboard } from "./componenti/Dashboard";

function App() {
  return (
    <UserProvider>
      <Registrazione></Registrazione>
      <Login></Login>
      <Dashboard></Dashboard>
    </UserProvider>
  );
}

export default App;
