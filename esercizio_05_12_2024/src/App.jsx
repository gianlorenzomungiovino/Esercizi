import { useState } from "react";
import "./App.css";
import { Film } from "./componenti/Film";
// import { Somma } from "./componenti/Somma";

function App() {
  const FilmArray = [
    "Matrix",
    "Inception",
    "Titanic",
    "Lord Of The Rings",
    "Star Wars",
  ];

  const [preferiti, setPreferiti] = useState([]);

  function aggiungiPreferiti(film) {
    if (!preferiti.includes(film)) {
      setPreferiti([...preferiti, film]);
    }
  }

  function rimuoviPreferiti(film) {
    setPreferiti(preferiti.filter((x) => x !== film));
  }

  return (
    <>
      {/* <Somma /> */}
      <div>
        <ul>
          {FilmArray.map((film, index) => (
            <Film
              key={index}
              titolo={film}
              stato={preferiti.includes(film)}
              aggiungiPreferiti={aggiungiPreferiti}
              rimuoviPreferiti={rimuoviPreferiti}
            />
          ))}
        </ul>
        <div>
          {preferiti.length > 0 ? (
            <ul>
              {preferiti.map((x, index) => (
                <li key={index}>{x}</li>
              ))}
            </ul>
          ) : (
            <p>Aggiunti ai preferiti</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
