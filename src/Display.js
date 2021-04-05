import React from 'react';
import './Display.css';
import BankDataProvider, { useBank, useBankUpdate, useDrumKitData} from './BankContext.js';



function Display(){

const drumKitData = useDrumKitData();


return (
    
    <div id="display">
      <p>{drumKitData.displayText}</p>
    </div>
  );
}

export default Display;