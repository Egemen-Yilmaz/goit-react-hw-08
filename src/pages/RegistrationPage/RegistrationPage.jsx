import React from 'react';
import styles from './RegistrationPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <section className={styles.container}>
      <h2>Register</h2>
      <RegistrationForm />
    </section>
  );
};

export default RegistrationPage;
