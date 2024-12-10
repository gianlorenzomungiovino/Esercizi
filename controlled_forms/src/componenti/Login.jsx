import { useState } from "react";

export function Login({ onLogin }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInputChange(event) {
    // const name = event.target.name;
    // const value = event.target.value;
    // const checked = event.target.checked;
    // const type = event.target.type;

    const { name, value, checked, type } = event.target;

    setData((data) => {
      return { ...data, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handleLogin() {
    onLogin({
      username: data.username,
      password: data.password,
      remember: data.remember,
    });
  }

  function handleReset() {
    setData({ username: "", password: "", remember: false });
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          name="username"
          type="text"
          value={data.username}
          onChange={handleInputChange}
          placeholder="username"
        />
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handleInputChange}
          placeholder="password"
        />
        <input
          name="remember"
          type="checkbox"
          checked={data.checked}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          disabled={!data.username || !data.password}
          onClick={handleLogin}
        >
          Login
        </button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </>
  );
}
