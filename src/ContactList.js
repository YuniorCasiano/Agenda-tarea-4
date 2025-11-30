import React from "react";

function ContactList({ contacts }) {
  return (
    <div>
      <h2>Listado de Contactos</h2>
      {contacts.length === 0 ? (
        <p>No hay contactos.</p>
      ) : (
        <ul>
          {contacts.map((c, index) => (
            <li key={index}>
              <strong>{c.nombre} {c.apellido}</strong> - {c.telefono}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
