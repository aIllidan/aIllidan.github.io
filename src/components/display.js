import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {

  render() {
    return (
      <div className={'display ' + this.props.className + ' ' + this.props.isLongExpr}>

        {this.props.children}


      </div>
    )
  }
}

Display.propTypes ={
  className:  PropTypes.string.isRequired,
  isLongExpr: PropTypes.string.isRequired
}

export default Display