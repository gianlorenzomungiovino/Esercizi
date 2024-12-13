// Create an index.css file and import it within the index.jsx file.
// Add a .welcome class to the Welcome component that sets its background color and adds a border.
// Modify the CounterDisplay component adding an inline style attribute, editing font size and font color.
// Modify the Login component so that the "login" button background color is "red" when the inputted password's length is shorter than 8 characters, green otherwise.

import "./App.css";
import { Counter } from "./componenti/Counter";
import { Login } from "./componenti/Login";
import { Welcome } from "./componenti/Welcome";

function App() {
  return (
    <>
      <Welcome name={"Gianlorenzo"} />
      <Counter initValue={0} />
      <hr />
      <Login />
    </>
  );
}

export default App;
