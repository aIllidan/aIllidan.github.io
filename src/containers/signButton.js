import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { signClick } from '../actions/calculate';

class SignButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  onClick() {
    return this.props.handleClick(this.props.sign)
  }

  getText() {
    return this.props.sign
  }

  handleClick() {
    return this.onClick()
  }

  render() {
    return (
      <div className="signButtons">

        <button className='button'
          onClick={this.handleClick}>
          {this.getText()}
        </button>

      </div>)
  }
}

SignButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  onClick:     PropTypes.func.isRequired,
  getText:     PropTypes.func.isRequired,
  sign:        PropTypes.number.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: (sign) => {
      dispatch(signClick(sign))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignButton)