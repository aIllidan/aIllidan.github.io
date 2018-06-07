import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { digitClick } from '../actions/calculate';


class DigitButton extends Component {
  
  handleClick = () => { 
     this.props.handleClick()
  }

  render() {
    let digit = this.props.digit
    return (
      <div className="digitButtons">

        <button className={'button '}
          onClick={this.handleClick}>
          {digit}
          </button>

      </div>
    )
  }
}

DigitButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  digit:       PropTypes.number.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let digit = ownProps.digit
  return {
      handleClick: () => {
      dispatch(digitClick(digit))
    }
  }
}

export default connect(null, mapDispatchToProps)(DigitButton)