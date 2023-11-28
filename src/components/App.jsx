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
    if (contacts !== 0) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
      console.log('update');
    }
  }, [contacts]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const addContact = ({ name, number }) => {
    const nameExists = contacts.find(contact => contact.name === name);
    if (nameExists) {
      alert(`${name} is already in contacts`);
      this.setState({ name: '', number: '' });
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
      localStorage.setItem(LS_KEY, JSON.stringify(delCon));
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
        contacts={filterSuchContact || contacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const record = JSON.parse(localStorage.getItem(LS_KEY));

//     if (record) {
//       this.setState({ contacts: record });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.ContactList !== this.state.contacts) {
//       localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
//       console.log('update');
//     }
//   }

// handleFilterChange = event => {
//   this.setState({ filter: event.target.value });
// };

// addContact = (name, number) => {
//   const { contacts } = this.state;
//   const nameExists = contacts.find(contact => contact.name === name);
//   if (nameExists) {
//     alert(`${name} is already in contacts`);
//     this.setState({ name: '', number: '' });
//     return;
//   }
//   const newContact = {
//     id: nanoid(),
//     name,
//     number,
//   };
//   this.setState(prevState => ({
//     contacts: [...prevState.contacts, newContact],
//   }));
// };

// handleDeleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };
// filterSuchContact = () => {
//   const { contacts, filter } = this.state;
//   const valueToLowerCase = filter.toLowerCase().trim();
//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().trim().includes(valueToLowerCase)
//   );
//   return filteredContacts;
// };

//   render() {
//     const { contacts, filter } = this.state;
//     const filteredContacts = this.filterSuchContact();
//     return (
// <div className={css.container}>
//   <h1 className={css.title}>Phonebook</h1>
//   <ContactForm onSubmit={this.addContact} />

//   <h2 className={css.title}>Contact List</h2>
//   <Filter value={filter} onChange={this.handleFilterChange} />
//   <ContactList
//     contacts={filteredContacts || contacts}
//     onDeleteContact={this.handleDeleteContact}
//   />
// </div>
//     );
//   }
// }

// export default App;
