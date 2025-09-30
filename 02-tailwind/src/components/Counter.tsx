import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import Button from './Button';


const Counter = () => {

    const [colorType, setColorType] = useState<"green" | "red" | "blue">("blue")
    const { count, increment, decrement, reset } = useCounter();
    return (
        <div>Counter
            <h1 className='text-4xl font-bold text-center'>{count}</h1>
            <div className="flex gap-4">
                <button onClick={increment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"> Aumentar 1</button>
                <button onClick={decrement} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"> Restar 1</button>
                <button onClick={reset} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out "> Resetear</button>
                <Button colorType={colorType} setColorType={setColorType} />


            </div>
        </div>
    )
}

export default Counter