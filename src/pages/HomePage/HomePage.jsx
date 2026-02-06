import React from 'react';
import styles from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <section className={styles.container}>
      <h1>Welcome to Contacts App</h1>
      {isLoggedIn ? (
        <>
          <p>Hello{user && user.name ? `, ${user.name}` : ''}! You're signed in.</p>
          <p>
            Go to your <Link to="/contacts">contacts</Link>.
          </p>
        </>
      ) : (
        <p>Use the navigation to register or login.</p>
      )}
    </section>
  );
};

export default HomePage;
