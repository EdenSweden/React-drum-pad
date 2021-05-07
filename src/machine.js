import React from 'react';
import './Machine.css';
import Buttons from './Buttons';
import Controls from './Controls';

export default function Machine() {

  return (
    <div id="drum-machine">      
        <Buttons />
        <Controls />
    </div>
  )
}