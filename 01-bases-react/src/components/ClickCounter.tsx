
import React, { Fragment, useEffect, useState } from 'react'

export const ClickCounter = () => {

    const [count, setCount] = useState(0);

    const aumentar = () => setCount(count + 1);
    
    useEffect(() => {
        console.log(count)
    }, [count])
  return (
    <Fragment>
        <h1>Contador del boton</h1>
        <button onClick={aumentar}>
            Aumentar
        </button>

        <p>{count}</p>
    </Fragment>
  )
}
