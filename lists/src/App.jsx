// Create a component called Color that receives an object called color as a prop, which will have 2 properties, id and name, and returns an li tag that displays the name property.
// Create a second component called Colors, which takes an array of objects as a prop, where the properties are always name and id, and displays an unordered list of Color components.

import "./App.css";
import { Color } from "./componenti/Color";

function App() {
  const arrColors = [
    { id: 1, name: "red" },
    { id: 2, name: "green" },
    { id: 3, name: "yellow" },
    { id: 4, name: "blue" },
  ];
  return (
    <>
      <Color color={{ id: 1, name: "white" }} colors={arrColors} />
    </>
  );
}

export default App;
