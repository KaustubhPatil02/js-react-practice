import React from "react";

function ChildComponent({ onMessageUpdate }) {
  const handleClick = () => {
    // Call the function passed from the parent
    onMessageUpdate("Message updated from Child!");
  };

  return (
    <div>
      <button onClick={handleClick}>Update Parent State</button>
    </div>
  );
}

export default ChildComponent;
