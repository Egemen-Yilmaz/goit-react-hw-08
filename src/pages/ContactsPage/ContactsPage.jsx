import React, { useEffect } from 'react';
import styles from './ContactsPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <h2>Your Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </section>
  );
};

export default ContactsPage;
