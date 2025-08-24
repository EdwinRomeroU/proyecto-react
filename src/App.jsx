import { useState } from 'react'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListcontainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje={"Bienvenidos a JECA Joyería"} />
    </>
  )
}

export default App
