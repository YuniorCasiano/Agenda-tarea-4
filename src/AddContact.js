import React, { useState } from "react";

function AddContact({ onAdd }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const newContact = { nombre, apellido, telefono };

    onAdd(newContact);

    setNombre("");
    setApellido("");
    setTelefono("");
  };

  return (
    <div>
      <h2>Agregar Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        /><br />

        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        /><br />

        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default AddContact;
