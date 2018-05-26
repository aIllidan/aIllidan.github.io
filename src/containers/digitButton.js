import React, { Component } from 'react';
import { connect } from 'react-redux';
import { digitClick } from '../actions/calculate';



class DigitButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  onClick() {
    
    return this.props.handleClick(this.props.digit)
  }

  getText() {
    return this.props.digit
  }

  handleClick() {
    return this.onClick()
  }

  render() {
    return (
      <div className="digitButtons">

        <button className={'button'}
          onClick={this.handleClick}>
          {this.getText()}
          </button>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  return {
    handleClick: (digit) => {
      dispatch(digitClick(digit))
    }
  }
}

export default connect(null, mapDispatchToProps)(DigitButton)