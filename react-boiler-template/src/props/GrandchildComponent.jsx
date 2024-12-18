import React, { useContext } from "react";
import { UserContext } from "../context-api/UserContext";

function GrandChildComponent() {
  // Access the context using useContext
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h3>GrandChild Component</h3>
      <p>User: {user}</p>
      <button onClick={() => setUser("Mahendra Singh Dhoni")}>
        Update User Name
      </button>
    </div>
  );
}

export default GrandChildComponent;
