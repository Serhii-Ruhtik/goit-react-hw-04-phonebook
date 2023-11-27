import { Component } from 'react';

import css from '../Phonebook.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a name.');
      return;
    }
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label} htmlFor="name">
          Name:
        </label>
        <input
          className={css.input}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <label className={css.label} htmlFor="number">
          Number:
        </label>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          required
        />
        <button className={css.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
