import React from 'react';
import './Machine.css';
import Buttons from './Buttons.js';
import Controls from './Controls.js';

function Machine() {


  return (
      <div id="drum-machine">
        <Buttons />
        <Controls />
      </div>
  );
}

export default Machine;