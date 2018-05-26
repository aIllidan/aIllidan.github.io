import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signClick} from '../actions/calculate';



class SignButton extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    
    onClick(){
       
       return this.props.handleClick(this.props.sign)
    }

    getText(){
        return this.props.sign
    }

    handleClick(){
        return this.onClick()
    }

    render(){
        return(
        <div className="signButtons">

            <button className={'button ' + this.props.className} onClick={this.handleClick}>{this.getText()}</button>

        </div>)
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
   return { handleClick: (sign)=>{
       dispatch(signClick(sign))
   }
   }
}

export default connect(null,mapDispatchToProps)(SignButton)