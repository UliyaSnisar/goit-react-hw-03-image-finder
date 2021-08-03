import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  static defaultProps = {
    value: '',
  };

  static propTypes = {
    value: PropTypes.string,
  };

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.changeQuery(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={value}
          />
        </form>
      </header>
    );
  }
}
