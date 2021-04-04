import React from 'react';
import './Display.css';
import { useBank, useBankUpdate } from './BankContext.js';
import BankData, { BankContext } from './BankContext.js';



function Display(){

//const currentBankData = useContext(BankContext);

const 

return (
    
    <div id="display">
      <p>{currentBankData.displayText}</p>
    </div>
  );
}

export default Display;