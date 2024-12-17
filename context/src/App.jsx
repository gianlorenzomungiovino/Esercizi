// Create a Hello function component that renders the "Hello, World!" message within an h2 tag. Create a LanguageContext and wrap the Hello component within its provider. Add a select tag to the component in which the Hello component is rendered that allows the user to select the language, and pass it as a value to the Provider.
// Consume the LanguageContext within the Hello component by using the useContext hook, and show the "Hello, World!" message in the correct language

import { useState } from "react";
import "./App.css";
import { Hello } from "./componenti/Hello";
import { LanguageContext } from "./componenti/LanguageContext";

function App() {
  const [language, setLanguage] = useState("en");

  function handleChangeLanguage(language) {
    setLanguage(language.target.value);
  }

  return (
    <>
      <select onChange={handleChangeLanguage}>
        <option value="en">English</option>
        <option value="it">Italian</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Hello />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
