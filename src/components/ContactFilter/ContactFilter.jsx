import React, { Component } from 'react';
import { Input } from './ContactFilter.styled';

class ContactFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.filter || '',
    };
  }

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter } = this.state;

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
