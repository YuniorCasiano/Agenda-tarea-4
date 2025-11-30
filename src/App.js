import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  // Cargar contactos desde el servidor
  const loadContacts = async () => {
    try {
      const response = await fetch("http://www.raydelto.org/agenda.php");
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.log("Error cargando contactos:", error);
    }
  };

  // Cargar contactos al iniciar
  useEffect(() => {
    loadContacts();
  }, []);

  // Agregar nuevo contacto
  const addContact = async (newContact) => {
    try {
      await fetch("http://www.raydelto.org/agenda.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContact),
      });

      // Volver a cargar la lista después de agregar
      loadContacts();
    } catch (error) {
      console.log("Error agregando contacto:", error);
    }
  };

  return (
    <div className="container">
      <h1>Agenda React</h1>

      <AddContact onAdd={addContact} />

      <hr />

      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
