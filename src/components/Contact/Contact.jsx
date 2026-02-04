import styles from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';


export default function Contact({ contact }) {

  const dispatch = useDispatch();

  const handleDelete = () => {
     dispatch(deleteContact(contact.id));
   };

  return (
    <div className={styles.item}>
      <div className={styles.contact}>

        <div className={styles.iconWrapper}>
            <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            >
            <path
                fill="currentColor"
                d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h2c0-2.761 2.239-5 5-5s5 2.239 5 5h2c0-3.866-3.134-7-7-7z"
            />
            </svg>
            <p className={styles.name}>{contact.name}</p>
        </div>


        <div className={styles.iconWrapper}>
            <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            >
            <path
                fill="currentColor"
                d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1H6.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z"
            />
            </svg>
            <p className={styles.number}>{contact.number}</p>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.deleteButton} type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
