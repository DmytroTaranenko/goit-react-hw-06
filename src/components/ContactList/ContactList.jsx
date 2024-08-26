import Contact from "../Contact/Contact";
import clsx from "clsx";
import css from "./ContactList.module.css";
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <Contact
          onDeleteContact={onDeleteContact}
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
