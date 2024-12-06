export function Semaforo({ color }) {
  const styling = (colore) => ({
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    backgroundColor: colore,
    opacity: color === colore ? 1 : 0.33,
  });

  return (
    <div
      style={{
        maxWidth: "50px",
        padding: "25px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "grey",
        borderRadius: "10px",
      }}
    >
      <div style={styling("red")}></div>
      <div style={styling("yellow")}></div>
      <div style={styling("green")}></div>
    </div>
  );
}
