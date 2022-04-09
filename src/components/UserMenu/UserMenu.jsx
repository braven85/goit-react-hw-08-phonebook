import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../services/api";
import ContactForm from "../ContactForm/ContactForm";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import classes from "./UserMenu.module.css";

const UserMenu = () => {
  const { token } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts(token));
  }, [dispatch, token]);

  return (
    <section className={classes["user-menu-container"]}>
      <ContactForm />
      <HorizontalLine />
      <h1>Contacts</h1>
      <Filter />
      <ContactsList />
    </section>
  );
};

export default UserMenu;
