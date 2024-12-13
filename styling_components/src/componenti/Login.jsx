import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    utente: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setData((data) => {
      return { ...data, [name]: value };
    });

    if (data.password > 6) {
      console.log(data.password);
    }
  }

  return (
    <>
      <label htmlFor="utente">Utente:</label>
      <input
        type="text"
        name="utente"
        value={data.utente}
        onChange={handleInputChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        style={{ backgroundColor: data.password.length < 8 ? "red" : "green" }}
      >
        Login
      </button>
    </>
  );
}
