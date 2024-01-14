import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from './ContactFilter.styled';

class ContactFilter extends Component {
  handleFilterChange = event => {
    const { setFilter } = this.props;
    setFilter(event.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <Input
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={this.handleFilterChange}
      />
    );
  }
}

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default ContactFilter;
