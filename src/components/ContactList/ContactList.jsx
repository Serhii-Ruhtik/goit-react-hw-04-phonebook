import React from 'react';
import css from '../Phonebook.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.list}>
    {contacts.map(contact => (
      <li className={css.item} key={contact.id}>
        {contact.name}: {contact.number}
        <button
          className={css.btnDel}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
