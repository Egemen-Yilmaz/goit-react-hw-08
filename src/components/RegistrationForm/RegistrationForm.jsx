import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short').required('Required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    (async () => {
      try {
        console.log('Register submit', values);
  const payload = await dispatch(register({ name: values.name, email: values.email, password: values.password })).unwrap();
  console.log('Register payload', payload);
  toast.success('Registration successful');
  setServerError(null);
  navigate('/contacts');
        // resetForm();
      } catch (error) {
        console.error('Register error', error);
        const text = error?.message ?? (typeof error === 'string' ? error : JSON.stringify(error));
        setServerError(text);
        toast.error('Registration failed: ' + text);
      } finally {
        setSubmitting(false);
      }
    })();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={RegistrationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <label className={styles.label} htmlFor="name">Name</label>
          <Field className={styles.input} name="name" />
          <ErrorMessage className={styles.error} name="name" component="div" />

          <label className={styles.label} htmlFor="email">Email</label>
          <Field className={styles.input} name="email" type="email" />
          <ErrorMessage className={styles.error} name="email" component="div" />

          <label className={styles.label} htmlFor="password">Password</label>
          <Field className={styles.input} name="password" type="password" />
          <ErrorMessage className={styles.error} name="password" component="div" />

          <button className={styles.button} type="submit" disabled={isSubmitting}>Register</button>
          {serverError && <div className={styles.serverError}>{serverError}</div>}
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
