import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short').required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    (async () => {
      try {
        console.log('Login submit', values);
        const payload = await dispatch(logIn({ email: values.email, password: values.password })).unwrap();
        console.log('Login payload', payload);
        toast.success('Login successful');
        setServerError(null);
        navigate('/contacts');
      } catch (error) {
        console.error('Login error', error);
        const text = error?.message ?? (typeof error === 'string' ? error : JSON.stringify(error));
        setServerError(text);
        toast.error('Login failed: ' + text);
      } finally {
        setSubmitting(false);
      }
    })();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <Field className={styles.input} type="email" name="email" />
          <ErrorMessage className={styles.error} name="email" component="div" />

          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <Field className={styles.input} type="password" name="password" />
          <ErrorMessage className={styles.error} name="password" component="div" />

          <button className={styles.button} type="submit" disabled={isSubmitting}>
            Login
          </button>
          {serverError && <div className={styles.serverError}>{serverError}</div>}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
