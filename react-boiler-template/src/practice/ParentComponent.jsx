import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () =>  {
    const [message, setMessage] = useState("Hello from Parent");

    // Function to update state
    const updateMessage = (message) => {
        setMessage(message);
    };
    return (
        <div>
            <h1>{message}</h1>
            {/* Pass the updateMessage function as a prop */}
            <ChildComponent onMessageUpdate={updateMessage} />
        </div>
    )
}

export default ParentComponent
