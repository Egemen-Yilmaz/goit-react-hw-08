import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={styles.container}>
      <h1>Welcome to Contacts App</h1>
      <p>Use the navigation to register or login.</p>
    </section>
  );
};

export default HomePage;
