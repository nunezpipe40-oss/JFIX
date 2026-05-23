import { useState } from 'react'
import './Formulario.css'

function Formulario({ alAgregar }) {
  const [nuevaTarea, setNuevaTarea] = useState("")

  const manejarEnvio = (e) => {
    e.preventDefault()

    if (nuevaTarea.trim() === "") {
      alert("Por favor escribe algo")
      return
    }

    alAgregar(nuevaTarea)
    setNuevaTarea("")
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <h2>Agregar nueva tarea</h2>

      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe algo..."
      />

      <button type="submit">Agregar</button>
    </form>
  )
}

export default Formulario