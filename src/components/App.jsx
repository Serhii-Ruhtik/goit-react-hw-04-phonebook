import { useState } from 'react';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';

const LS_KEY = 'reader_contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const record = JSON.parse(localStorage.getItem(LS_KEY));
    if (record) {
      setContacts(record);
    }
  }, []);

  useEffect(() => {
    if (contacts.length !== 0) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const addContact = ({ name, number }) => {
    const nameExists = contacts.find(contact => contact.name === name);
    if (nameExists) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prev => [...prev, newContact]);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevState => {
      const delCon = prevState.filter(contact => contact.id !== contactId);
      return delCon;
    });
  };

  const filterSuchContact = () => {
    const valueToLowerCase = filter.toLowerCase().trim();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(valueToLowerCase)
    );
    return filteredContacts;
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2 className={css.title}>Contact List</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={contacts && filterSuchContact()}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
