import { useEffect, useState } from 'react';
import CountComponent from './CountComponent';

function CountRootComponent() {
    const [count, setCount] = useState(11);
    const [name, setName] = useState('Pero');

    useEffect(() => {
        console.log("useEffect izmjena count");

        return () => {
            console.log("useEffect return");
        };
    },[count]); // Only re-run the effect if count changes

    useEffect(() => {
        console.log("useEffect izmjena name");
    },[name]);

    useEffect(() => {
        console.log("ovaj useEffect uvijek se zove");        
    });

    useEffect(() => {
        console.log("ovaj useEffect se zove jednom");        
    }, []);

    const handlePlus = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handlePlus5 = () => {
        const newCount = count + 5;
        setCount(newCount);
    }

    const handlePlusN = (n) => {
        const newCount = count + n;
        setCount(newCount);
    }

    const handleMinus = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    const handleMinusN = (n) => {
        const newCount = count - n;
        setCount(newCount);
    }

    return (
        <div>
            <CountComponent count={count} 
                            onPlus={handlePlus} 
                            onMinus={handleMinus}
                            onPlus5={handlePlus5}
                            onPlusN={handlePlusN} 
                            onMinusN={handleMinusN}/>
        </div>
    )
}

export default CountRootComponent;