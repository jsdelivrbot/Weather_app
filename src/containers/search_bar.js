import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends  Component {
  constructor() {
    super();
    this.state = {
      term : ''
    }
  }

  onInputChange = (event) => {
      this.setState({
        term : event.target.value
      });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term : ''
    })
  }

  render() {
    return (
      <form
        className = "input-group"
        onSubmit = {this.onFormSubmit}>
        <input
          type = "text"
          className = "form-control"
          onChange = {this.onInputChange}
          value = {this.state.term}
          />
        <span className = "input-group-btn">
          <input type = "submit" className = "btn btn-primary" value = "search" />
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather } , dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
