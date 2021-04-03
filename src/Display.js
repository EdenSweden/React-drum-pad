import React, { useContext } from 'react';
import './Display.css';
import BankData, { BankContext } from './BankContext.js';



function Display(){

const currentBankData = useContext(BankContext);

return (
    
    <div id="display">
      <p>{currentBankData.displayText}</p>
    </div>
  );
}

export default Display;