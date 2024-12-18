import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!users.includes(username)) {
      setUsers([...users, username]);
      setUsername("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(type) => setUsername(type.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {users.map((user, index) => (
          <GithubUser key={index} username={user} />
        ))}
      </ul>
    </>
  );
}
