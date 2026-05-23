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
   // ✅ CREATE
  const agregarTarea = (textoNuevo) => {
    const tareaNueva = {
      id: Date.now(),
      texto: textoNuevo,
      completada: false
    }

    setTareas([...tareas, tareaNueva])
  }

  // ✅ DELETE
  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id))
  }

  // ✅ UPDATE
  const alternarCompletada = (id) => {
    setTareas(tareas.map(t =>
      t.id === id
        ? { ...t, completada: !t.completada }
        : t
    ))
  }

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
       <Formulario alAgregar={agregarTarea} />
      <Lista
      tareas={tareas}
        alEliminar={eliminarTarea}
        alAlternar={alternarCompletada} />
      <Item tarea={tareas} />
      <PiePagina />
    </div>
  )
}

export default App