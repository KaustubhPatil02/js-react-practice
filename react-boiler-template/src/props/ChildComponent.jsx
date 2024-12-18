import React, { useContext } from "react";
import {UserContext} from '../context-api/UserContext'
function ChildComponent({ onMessageUpdate }) {
    const { user, setUser } = useContext(UserContext);
  const handleClick = () => {
    // Call the function passed from the parent
    onMessageUpdate("Message updated from Child!");
  };

  return (
    <div>
      <button onClick={handleClick}>Update Parent State</button>
      <h3>Child Component</h3>
      <p>Example of context api</p>
      <p>User: {user}</p>
      <button onClick={() => setUser("Mahendra Singh Dhoni")}>
        Update User Name
      </button>
    </div>
  );
}

export default ChildComponent;
