function CountComponent({count, onPlus, onMinus, onPlus5, onPlusN, onMinusN}) {
    const handlePlus = (e) => {
        console.log(e);
        onPlus();
    }

    const handleMinus = () => {
        onMinus();
    }

    const handlePlus5 = () => {
        onPlus5();
    }

    const handlePlus10 = () => {
        onPlusN(10);
    }

    return (
        <div>
            Count je: {count}
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMinus}>-</button>
            <button onClick={handlePlus5}>+5</button>
            <button onClick={handlePlus10}>+10</button>
            <button onClick={() => onMinusN(7)}>-7</button>
            <button onClick={() => onMinusN(3)}>-3</button>
        </div>
    );
}

export default CountComponent;