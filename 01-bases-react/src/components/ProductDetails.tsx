import React, { Fragment, useState } from 'react'

export const ProductDetails = () => {

    const [showDetails, setShowDetails] = useState(false);


  return (
    <Fragment>
        <h1>Productos</h1>
        <button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Ocultar detalles" : "Mostrar detalles" }
        </button>

        
    </Fragment>
  )
}
