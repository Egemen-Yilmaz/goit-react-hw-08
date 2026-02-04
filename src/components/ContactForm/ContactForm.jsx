import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
  const initialValue = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Must be a valid number!')
      .max(50, 'Too Long!')
      .required('Required!'),
  });

  const handleSubmit = (value, actions) => {
    dispatch(addContact({
      name: value.name,
      number: value.number,
    }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <Field className={css.input} type="text" name="name" id="name" />
        <ErrorMessage name="name" component="span" />

        <label className={css.label} htmlFor="number">
          Number
        </label>
        <Field className={css.input} type="tel" name="number" id="number" />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
