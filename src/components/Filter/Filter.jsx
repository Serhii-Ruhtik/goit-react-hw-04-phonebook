import React from 'react';
import css from '../Phonebook.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.label} htmlFor="filter">
    Filter by name:
    <input
      className={css.input}
      type="text"
      id="filter"
      name="name"
      value={value}
      onChange={onChange}
      required
    />
  </label>
);

export default Filter;
