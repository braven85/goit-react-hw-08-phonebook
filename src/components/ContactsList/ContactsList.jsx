import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import styles from "./ContactsList.module.css";

const ContactsList = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const contacts = useSelector((state) => state.contacts);
  const { contactsList, loading } = contacts;

  const filterContacts = (contactsToFilter) => {
    return contactsList.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  let filteredContacts;

  if (filter === "") {
    filteredContacts = contactsList;
  } else {
    filteredContacts = filterContacts(contactsList);
  }

  return (
    <ul className={styles["contacts-list"]}>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        filteredContacts?.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))
      )}
    </ul>
  );
};

export default ContactsList;
