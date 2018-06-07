import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { signClick } from '../actions/calculate';

class SignButton extends Component {
  
  handleClick = () => {
    this.props.handleClick()
  }

  render() {
    let sign = this.props.sign
    return (
      <div className="signButtons">
        <button className='button'
          onClick={this.handleClick}>
          {sign}
        </button>

      </div>)
  }
}

SignButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  sign: PropTypes.string
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let sign = ownProps.sign
  return {
    handleClick: () => {
      dispatch(signClick(sign))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignButton)