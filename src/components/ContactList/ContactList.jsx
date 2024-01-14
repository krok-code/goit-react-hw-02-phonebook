import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContactItems,
  ContactName,
  ContactNumber,
  Button,
} from './ContactList.styled';

class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    );
  }
}

class ContactItem extends Component {
  handleDelete = () => {
    const { contact, deleteContact } = this.props;
    deleteContact(contact.id);
  };

  render() {
    const { contact } = this.props;

    return (
      <ContactItems>
        <ContactName>{contact.name}</ContactName>
        <ContactNumber>{contact.number}</ContactNumber>
        <Button onClick={this.handleDelete}>Delete</Button>
      </ContactItems>
    );
  }
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
