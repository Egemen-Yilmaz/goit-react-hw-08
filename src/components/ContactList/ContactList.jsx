import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.list}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}
