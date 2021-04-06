import React from 'react';
import './Display.css';
import {useDrumKitData} from './BankContext.js';
import { usePower } from './PowerButtonContext.js';



function Display(){

const drumKitData = useDrumKitData();
const isPowerOn = usePower();


return (
    
    <div id="display">
      <p>{isPowerOn ? drumKitData.displayText : ""}</p>
    </div>
  );
}

export default Display;