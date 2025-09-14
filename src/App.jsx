import { useState } from 'react'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListcontainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Anillos from './Componentes/Anillos/Anillos'
import Aretes from './Componentes/Aretes/Aretes'
import Contacto from './Componentes/Contacto/Contacto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <ItemListContainer/>
        <Routes>
          <Route path="/Anillos/:id" element={<Anillos/>}/>
          <Route path="/Aretes" element={<Aretes/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
