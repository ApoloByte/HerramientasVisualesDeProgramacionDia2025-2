import React, { useState } from 'react'

export const Counter = () => {
    const [counter, setCounter] = useState(10);

    const increaseBy = (value: number) => {
        setCounter(counter +
            value
        )
    };

    return (
        <div className=''>
            <h3 className='text-center mb-5'>El contador está en:
                <small> {counter}</small>
            </h3>
            <div className='grid grid-cols-2 gap-x-8'>
                <button onClick={() => increaseBy(1)}
                    className="border-4 border-dashed border-sky-500 p-2 rounded-lg">
                    Incrementa 1
                </button>
                <button onClick={() => increaseBy(-1)} 
                    className="border-4 border-dashed border-sky-500 p-2 rounded-lg">
                    Decrementa 1
                </button>
            </div>
        </div>
    )
}
