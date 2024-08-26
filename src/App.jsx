import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import Contact from "./components/Contact/Contact";
import contactData from "./components/contactData.json";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const userData = localStorage.getItem("UserData");
    return userData ? JSON.parse(userData) : contactData;
  });

  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    localStorage.setItem("UserData", JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilterValue(value);
  };

  const onAddUserContact = (newContact) => {
    const finalyContact = {
      ...newContact,
      id: nanoid(),
    };
    setContacts([finalyContact, ...contacts]);
  };

  const onDeleteContact = (contactId) => {
    setContacts(contacts.filter((item) => item.id !== contactId));
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      contact.number.includes(filterValue)
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddUserContact={onAddUserContact} />
        <SearchBox value={filterValue} onChange={handleFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        />
      </div>
    </>
  );
}

export default App;
