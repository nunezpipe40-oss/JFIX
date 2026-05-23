// App.jsx — el componente principal que reúne todo
import { useState } from 'react'
import Encabezado from './componentes/Encabezado'
import Formulario from './componentes/Formulario'
import Lista from './componentes/Lista'
import Item from './componentes/Item'
import PiePagina from './componentes/PiePagina'
import './App.css'

function App() {


 const tareas = [
    { id: 1, texto: "Estudiar React", completada: false },
    { id: 2, texto: "Hacer ejercicio", completada: true },
    { id: 3, texto: "Leer 10 paginas", completada: false }
  ]
  return (
    <div className="app">
      <Encabezado
  titulo="Mis Tareas"
  subtitulo="Organiza lo que tienes que hacer hoy"/>
    <button
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
        className="boton-toggle"
      >
        {mostrarFormulario ? 'Ocultar formulario' : 'Agregar tarea'}
      </button>
      {mostrarFormulario && <Formulario />}
      <Lista />
      <Item tarea={tareas} />
      <PiePagina />
    </div>
  )
}

export default App