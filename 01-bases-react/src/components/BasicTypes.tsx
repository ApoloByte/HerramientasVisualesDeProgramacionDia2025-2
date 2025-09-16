import React from 'react'

export const BasicTypes = () => {
  const name: string = "Víctor";
  const age: number = 28;
  const isActive: boolean = false;

  const names: string[] = ["Julian", "Victor", "Dhayana", "David"];

  return (
    <div>BasicTypes
      <ol>
        <li>Nombre: {name}</li>
        <li>Edad: {age}</li>
        {/* <li>Usuario Activo?: {name==="David"?<b>Si</b>: <b>No</b>}</li> */}
        <li>Usuario Activo?: {isActive ? <div>Si</div> : <b>No</b>}</li>
      </ol>
      <h2>Listar nombres manualmente</h2>
      <ol>
        <li>nombre 1: {names[0]}</li>
        <li>nombre 2: {names[1]}</li>
        <li>nombre 3: {names[2]}</li>
        <li>nombre 4: {names[3]}</li>
      </ol>
      <h2>Listar nombres automaticamente</h2>

      <ol>
        {names.map((name, index) =>
          <li key={index}>
            {name}
          </li>
        )}

      </ol>

      <h2>Listar nombres automaticamente</h2>
      <ol>
        {names.map((name, index) => {
          return <li key={index}>
            {name}
          </li>
          
        })}
      </ol>



    </div>
  )
}
