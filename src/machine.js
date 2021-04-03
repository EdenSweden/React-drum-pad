import React, { useState } from 'react';
import './Machine.css';
import Buttons from './Buttons.js';
import Controls from './Controls.js';
import './BankContext.js';
//import BankTwoData from'./bankTwoContext.js';

function Machine() {

/*const [kitOneIsActive, toggleActiveKit] = useState(true);  
const bankData = kitOneisActive ? bankOneData : bankTwoData;
 
const handleSwitchBank = () => {
      toggleActiveKit(!kitOneIsActive);

};*/
  /*Need to:
* Make Buttons.js use the other array of audio files when kitTwoIsActive = false.
*Make Display.js show the name of the pad bank when Bank.js is clicked. Display and Bank are both children of Controls.
*/

  return (
      <BankContext.Provider value={bankData}>
      <div id="drum-machine">
        <Buttons />
        <Controls />
      </div>
      </BankContext.Provider>
  );
}

export default Machine;