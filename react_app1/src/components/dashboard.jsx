/* eslint-disable react/prop-types */
function Dashboard(props) {
  return (
    <div>
      <h3>Nome utente: {props.nome}</h3>
      <h3>Cognome utente: {props.cognome}</h3>
      <h3>Telefono: {props.telefono}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  );
}

export default Dashboard;
