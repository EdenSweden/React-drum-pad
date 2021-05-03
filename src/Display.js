import React, { useContext } from 'react';
import './Display.css';
import { GlobalStateContext} from './MasterContext';
//import {useDrumKitData} from './BankContext.js';
//import { usePower } from './PowerButtonContext.js';




export default function Display(){

const state = useContext(GlobalStateContext);



return ( 
    <div id="display">
      <p>{state.isPowerOn ? state.drumKitData.displayText : ""}</p>
    </div>
  );
}