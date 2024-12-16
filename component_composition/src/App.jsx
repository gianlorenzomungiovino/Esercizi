// Create a Container component that renders its children within a div tag.
// Have the div tag use a white background and a red border.
// Add a title prop that will contain the title value to be displayed before the children.
// Make the container collapsible, so that when the title is clicked the children are either hidden or shown again.
// Use the useState hook to keep track of the collapsed state.

import "./App.css";
import { Container } from "./componenti/Container";

function App() {
  return (
    <>
      <Container
        title={
          <div>
            <h2>Menu</h2>
            <p>clicca per espandere</p>
          </div>
        }
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          aperiam labore harum iusto blanditiis corporis ipsam distinctio culpa
          quod nobis nihil necessitatibus ipsum amet odio in, natus itaque, nisi
          consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus doloremque harum ratione impedit exercitationem tempora
          modi, iste nisi veritatis temporibus earum blanditiis deserunt?
          Sapiente blanditiis eius, corporis veritatis at cum.
        </p>
      </Container>
    </>
  );
}

export default App;
