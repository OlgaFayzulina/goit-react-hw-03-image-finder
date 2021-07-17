import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from '../../components/Searchbar/Searchbar.module.css'

class Searchbar extends Component {
    state = { query: '' };
  
    handelChange = e => {
      this.setState({ query: e.currentTarget.value });
    };
  
    handelSubmit = e => {
      e.preventDefault();
  
      this.props.onSubmit(this.state.query);
      this.setState({ query: '' });
    };
  
    render() {
  
      return (
        <header className={styles.searchbar}>
          <form className={styles.searchForm} onSubmit={this.handelSubmit}>
            <button type="submit" className={styles.searchButton}>
              <span className={styles.searchLabel}>Search</span>
            </button>
  
            <input
              className={styles.searchInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.handelChange}
            />
          </form>
        </header>
      );
    }
  }
  
  Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  
  export default Searchbar;