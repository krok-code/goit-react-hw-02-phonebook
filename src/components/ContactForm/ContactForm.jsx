import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Button, Text } from './ContactForm.styled';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleNumberChange(event) {
    this.setState({ number: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, number } = this.state;
    const { addContact, contacts } = this.props;

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const existingContactByName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContactByName) {
      alert('Contact with this name already exists!');
      return;
    }

    const existingContactByNumber = contacts.find(
      contact => contact.number === number.trim()
    );

    if (existingContactByNumber) {
      alert('Contact with this number already exists!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    addContact(newContact);
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Text>Name</Text>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={this.handleNameChange}
        />
        <Text>Number</Text>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleNumberChange}
        />
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
