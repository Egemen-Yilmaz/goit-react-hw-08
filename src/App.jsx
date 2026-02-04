import { useEffect } from 'react';
import css from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { fetchContacts } from './redux/contactsOps';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoading, selectError } from './redux/contactsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  

  return (
    <div className={css.container}>
        {isLoading && <p>Yükleniyor...</p>}
        {error && <p>{error}</p>}
      <h1>İletişim Kitabı</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
