import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Display from './display';
import Buttons from './buttons';

import { connect } from 'react-redux';

class Calculator extends Component {
  
  render() {
    return (
      <div className='calculator' >
        <Display className="error"  isLongExpr ={this.props.isLongExpr}>
        {this.props.err}
        </Display>
        <Display className="text "  isLongExpr ={this.props.isLongExpr} >
        {this.props.text}
        </Display>
        <Buttons />
      </div>
    )
  }
}

Calculator.propTypes ={
  text:       PropTypes.string.isRequired,
  err:        PropTypes.string.isRequired,
  isLongExpr: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  text: state.buttonClick.text,
  err: state.buttonClick.err,
  isLongExpr: state.buttonClick.isLongExpr
  
})

export default connect(mapStateToProps)(Calculator)