import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ElementsList from './ElementsList/ElementsList';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../redux/tasksSlice';
import { getContacts } from '../redux/selectors';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    const getToStorage = JSON.parse(localStorage.getItem('contact'));
    if (getToStorage !== null) {
      for (let i = 0; i < getToStorage.length; i++) {
        dispatch(addContact(getToStorage[i].name, getToStorage[i].number));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    const addToStorage = JSON.stringify([...contacts]);
    localStorage.setItem('contact', addToStorage);
  }, [contacts]);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contact</h2>
      <Filter />
      <ElementsList />
    </>
  );
};

export default App;
