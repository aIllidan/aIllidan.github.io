import React, { Component } from 'react'


class Display extends Component {


  render() {
    return (
      <div className={'display ' + this.props.className + ' ' + this.props.isLongExpr}>

        {this.props.children}


      </div>
    )
  }
}

export default Display