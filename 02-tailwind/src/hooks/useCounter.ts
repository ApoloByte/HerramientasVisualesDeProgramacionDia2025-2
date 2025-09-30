import React, { useState } from 'react'

const INITIAL_VALUE = 0

export const useCounter = () => {
    const [count, setCount] = useState(INITIAL_VALUE);
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    function reset() {
        setCount(INITIAL_VALUE);
    }
    return{
        count,
        increment,
        decrement,
        reset
    }


}
