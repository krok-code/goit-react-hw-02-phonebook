import React, { Component } from 'react';
import { Input } from './ContactFilter.styled';

class ContactFilter extends Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    this.props.setFilter(event.target.value);
  }

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

export default ContactFilter;
