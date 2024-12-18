import React, { useState } from 'react'
import ChildComponent from './ChildComponent';
import { UserProvider } from '../context-api/UserContext';
import GrandChildComponent from './GrandchildComponent';

const ParentComponent = () =>  {
    const [message, setMessage] = useState("Hello from Parent");

    // Function to update state
    const updateMessage = (message) => {
        setMessage(message);
    };
    return (
        <div>
            <UserProvider>

            <h1>{message}</h1>
            {/* Pass the updateMessage function as a prop */}
            <ChildComponent onMessageUpdate={updateMessage} />
            <GrandChildComponent />
            </UserProvider>
        </div>
    )
}

export default ParentComponent
