import { useState } from 'react';
import css from '../Phonebook.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    console.log(event.currentTarget);

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a name.');
      return;
    }
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="name">
        Name:
      </label>
      <input
        className={css.input}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        required
      />
      <label className={css.label} htmlFor="number">
        Number:
      </label>
      <input
        className={css.input}
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        required
      />
      <button className={css.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
