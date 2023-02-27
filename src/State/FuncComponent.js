import React, { useState } from 'react';

function FuncComponent() {
    const [count, setCount] = useState(103);

    const handleCountUp = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    return (
        <div>
            <div>Count je: {count}</div>
            <button onClick={handleCountUp}>Count up</button>
        </div>
    );
}

export default FuncComponent;