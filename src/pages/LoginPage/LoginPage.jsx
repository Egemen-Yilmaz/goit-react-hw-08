import React from 'react';
import styles from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <section className={styles.container}>
      <h2>Login</h2>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
