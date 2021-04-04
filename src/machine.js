import React from 'react';
import './Machine.css';
import Buttons from './Buttons.js';
import Controls from './Controls.js';
import { BankDataProvider } from './BankContext.js';
//import BankData, { currentBankData, BankContext } from './BankContext.js';

export const BankContext = React.createContext();

export default function Machine() {

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
      <BankDataProvider>
      <div id="drum-machine">
        <Buttons />
        <Controls />
      </div>
      </BankDataProvider>
  );
}