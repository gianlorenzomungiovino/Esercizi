// Create an AlertClock function component that renders a button.
// When the button is clicked, an alert should be shown with the current time.
// Render the AlertClock component within the App component. Make it so that the event handler is received as a prop by the AlertClock component, instead of being implemented within the component itself.

export function AlertClock({ handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>
        <p>Current Time</p>
      </button>
    </div>
  );
}
