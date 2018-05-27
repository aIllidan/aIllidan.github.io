import React, { Component } from 'react'


class Display extends Component{

    
    render(){
        return(
            <div className='display'>

             {this.props.err} <br/>
             {this.props.text} 
              
            </div>
        )
    }
}

export default Display