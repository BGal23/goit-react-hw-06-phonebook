import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ElementsList from './ElementsList/ElementsList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = event => {
    event.preventDefault();
    const name = event.currentTarget['name'].value;
    const number = event.currentTarget['number'].value;
    if (contacts.some(check => check.name === name)) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.some(check => check.number === number)) {
      alert(`This number ${number} is already in contacts.`);
    } else {
      setContacts([
        ...contacts,
        {
          id: uuidv4(),
          name: name,
          number: number,
        },
      ]);
    }
    event.currentTarget.reset();

    return;
  };

  const findContact = event => {
    const value = event.target.value.toLowerCase();
    setFilter(value);
  };

  const delateContact = id => {
    const indexNum = contacts.findIndex(remove => remove.id === id);
    contacts.splice(indexNum, 1);
    setContacts([...contacts]);
  };

  useEffect(() => {
    const getToStorage = JSON.parse(localStorage.getItem('contact'));
    if (getToStorage !== null) {
      setContacts([...getToStorage]);
    }
  }, []);

  useEffect(() => {
    const addToStorage = JSON.stringify([...contacts]);
    localStorage.setItem('contact', addToStorage);
  }, [contacts]);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm newContact={addContact} />
      <h2>Contact</h2>
      <Filter filtered={findContact} />
      <ElementsList
        persons={contacts}
        filter={filter}
        delateContact={delateContact}
      />
    </>
  );
};

export default App;
