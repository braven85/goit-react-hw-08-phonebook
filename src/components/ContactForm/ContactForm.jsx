import React, { useRef } from "react";
import styles from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../services/api";

const ContactForm = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const { contactsList } = contacts;
  const { token } = useSelector((state) => state.users);
  const nameInputRef = useRef();
  const numberInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, number } = e.target;
    for (let contact of contactsList) {
      if (contact.name === name.value) {
        alert(`${name.value} is already on the contacts list`);
        return;
      }
    }
    const enteredName = nameInputRef.current.value;
    const enteredNumber = numberInputRef.current.value;

    const userData = {
      name: enteredName,
      number: enteredNumber,
    };

    dispatch(addContact(token, userData));
    form.reset();
  };

  return (
    <form className={styles.FormInput} onSubmit={handleSubmit}>
      <label className={styles.FormInput__label} htmlFor={nameInputId}>
        Name
        <br />
        <input
          className={styles.FormInput__input}
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
          ref={nameInputRef}
        />
      </label>
      <label className={styles.FormInput__label} htmlFor={numberInputId}>
        Number
        <br />
        <input
          className={styles.FormInput__input}
          type="tel"
          name="number"
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          ref={numberInputRef}
        />
      </label>
      <button type="submit" className={styles.FormInput__button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
