import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { List, ListItem, ItemWrapper, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <ItemWrapper>
          <p>{name}: </p>
          <p>{number}</p>
        </ItemWrapper>
        <Button type="button" onClick={() => onDeleteContact(id)}>
          <FaTrashAlt />
        </Button>
      </ListItem>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
