import React, { Component } from 'react'
import Display from './display';
import Buttons from './buttons';
import {connect} from 'react-redux';



class Calculator extends Component{

    
    render(){
       
        return(
            <div className='calculator' >
               <Display className="error">{this.props.err}</Display>    
               <Display className="text" >{this.props.text}</Display>
               <Buttons/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.buttonClick.text,
    err: state.buttonClick.err
})

export default connect(mapStateToProps)(Calculator)