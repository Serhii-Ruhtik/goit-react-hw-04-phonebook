// import { Component } from 'react';

import { useState } from 'react';
import css from '../Phonebook.module.css';

const ContactForm = ({ sumbit }) => {
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

  // const onSubmit = (name, number) => {
  //   sumbit({ name, number });
  //   setName('');
  //   setNumber('');
  //   console.log('Submitted:', name, number);
  // };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a name.');
      return;
    }
    sumbit({ name, number });
    setName('');
    setNumber('');
    // // Викликаємо onSubmit з вашими значеннями
    // onSubmit({ name, number });
    // setName('');
    // setNumber('');

    // // Очищаємо значення полів форми
    reset();
  };

  const reset = () => {
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

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { name, number } = this.state;
//     this.props.onSubmit(this.state.name, this.state.number);
//     this.reset();

//     if (name.trim() === '' || number.trim() === '') {
//       alert('Please enter a name.');
//       return;
//     }
//   };
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form className={css.form} onSubmit={this.handleSubmit}>
//         <label className={css.label} htmlFor="name">
//           Name:
//         </label>
//         <input
//           className={css.input}
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange={this.handleChange}
//           required
//         />
//         <label className={css.label} htmlFor="number">
//           Number:
//         </label>
//         <input
//           className={css.input}
//           type="tel"
//           name="number"
//           value={this.state.number}
//           onChange={this.handleChange}
//           required
//         />
//         <button className={css.button} type="submit">
//           Add Contact
//         </button>
//       </form>
//     );
//   }
// }
