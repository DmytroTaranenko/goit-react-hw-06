import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const filterValue = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase().trim()) ||
      contact.number.toLowerCase().includes(filterValue.toLowerCase().trim())
  );

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts !== undefined &&
        filteredContacts.map((contact) => (
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
