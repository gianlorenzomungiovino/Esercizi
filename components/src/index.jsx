import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);

// By using the same components more than once, it will be rendered again.

// It is possible to render the Message component directly within the App component. The result is the same.
