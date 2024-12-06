/* eslint-disable react/prop-types */
export function Film({ titolo, stato, rimuoviPreferiti, aggiungiPreferiti }) {
  return (
    <li>
      {titolo}
      {stato ? (
        <button onClick={() => rimuoviPreferiti(titolo)}>
          Rimuovi dai preferiti
        </button>
      ) : (
        <button onClick={() => aggiungiPreferiti(titolo)}>
          Aggiungi dai preferiti
        </button>
      )}
    </li>
  );
}
