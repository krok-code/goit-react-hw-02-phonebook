import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from 'GlobalStyle';
import { Section } from './Section/Section';
import { Container } from './App.styled';
// import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      this.state.contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`you already have ${name} in your contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <Container>
        <Section title="Phone book">
          {/* <ContactForm onSubmit={this.addContact} /> */}
        </Section>
        <GlobalStyle />
        <Section title="Contacts"></Section>
      </Container>
    );
  }
}
