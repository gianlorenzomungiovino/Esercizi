/* eslint-disable react/jsx-key */
export function Lista() {
  const colori = ["blu", "viola", "giallo", "rosso"];
  const handleClick = (colore) => {
    alert(`Hai cliccato il colore ${colore}`);
  };
  return (
    <>
      <ul>
        {colori.map((colore, index) => (
          <li onClick={() => handleClick(colore)} key={index}>
            {colore}
          </li>
        ))}
      </ul>
    </>
  );
}
