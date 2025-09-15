import { useState } from 'react'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListcontainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './Componentes/Contacto/Contacto'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/Categoria/:idCategoria" element={<ItemListContainer/>}/>
          <Route path="/Item/:idItem" element={<ItemDetailContainer/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
