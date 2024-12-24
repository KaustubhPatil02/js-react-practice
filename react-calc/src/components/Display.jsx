import React from 'react';

const Display = ({value}) => {
    return (
        <div className="p-4 text-3xl text-right text-white bg-gray-800 rounded-md">
            {value || '0'}
        </div>
    );
}

export default Display;
