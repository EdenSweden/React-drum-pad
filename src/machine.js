import React, { useContext } from 'react';
import './Machine.css';
import Buttons from './Buttons.js';
import Controls from './Controls.js';

function Machine() {

  /*Need to:
* Make Buttons.js use the other array of audio files when kitTwoIsActive = false.
*Make Display.js show the name of the pad bank when Bank.js is clicked. Display and Bank are both children of Controls.
*/

  return (
      <div id="drum-machine">
        <Buttons />
        <Controls />
      </div>
  );
}

export default Machine;