import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BasicTypes } from './components/BasicTypes'
import { ClickCounter } from './components/ClickCounter'
import { ProductDetails } from './components/ProductDetails'
import { SearchBox } from './components/SearchBox'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <BasicTypes/> */}
      <ClickCounter />
      <ProductDetails />
      <SearchBox />
    </>
  )
}

export default App
