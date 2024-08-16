import React, { useState } from 'react';

type CounterProps = {
    initialCount: number;
}

export const Counter: React.FC<CounterProps> = ({initialCount}) => {
    const [count, setCount] = useState<number>(initialCount);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </p>
        </div>
    )





}


















