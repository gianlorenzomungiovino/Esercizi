function Colors({ colors }) {
  return (
    <ul>
      <li>{colors.name}</li>
    </ul>
  );
}

export function Color({ color, colors }) {
  return (
    <>
      <li>{color.name}</li>
      <hr />
      <ul>
        {colors.map((color) => (
          <Colors key={color.id} colors={color} />
        ))}
      </ul>
    </>
  );
}
