function Message() {
  const arrMess = [
    "Sei stupenda",
    "I tuoi occhi brillano",
    "Come splende il sole",
    "Senza di te sarei perso",
  ];

  console.log(arrMess);

  const messCasuale = Math.floor(Math.random() * arrMess.length);
  console.log(messCasuale);

  return (
    <>
      {!arrMess[messCasuale] ? (
        <p style={{ color: "red" }}>Errore!</p>
      ) : (
        <p>{arrMess[messCasuale]}</p>
      )}
    </>
  );
}
export default Message;
