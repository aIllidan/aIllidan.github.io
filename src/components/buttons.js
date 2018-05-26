import React, { Component } from 'react';
import DigitButton from '../containers/digitButton';
import SignButton from '../containers/signButton';

class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        
        <SignButton sign='(' />
        <SignButton sign=')' />
        <SignButton sign='C' />
        <SignButton sign='/' /><br />
        
        <DigitButton digit={7} className="7" />
        <DigitButton digit={8} />
        <DigitButton digit={9} />
        <SignButton sign='*'/><br />
        <DigitButton digit={4} />
        <DigitButton digit={5} />
        <DigitButton digit={6} />
        <SignButton sign='-' /> <br />
        <DigitButton digit={1} />
        <DigitButton digit={2} />
        <DigitButton digit={3} />
        <SignButton sign='+' /><br />
        <SignButton sign='.' />
        <DigitButton digit={0} />
        <SignButton sign='=' className='equal'/>
        <SignButton sign='DEL' className='DELETE'/>
      </div>)
  }
}

export default Buttons