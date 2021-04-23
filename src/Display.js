import React, { useContext } from 'react';
import './Display.css';
import { GlobalStateContext } from './MasterContext';
//import {useDrumKitData} from './BankContext.js';
//import { usePower } from './PowerButtonContext.js';




export default function Display(){

const globalState = useContext(GlobalStateContext);
const state = globalState.state;
const drumKitData = globalState.getDrumKitData(); //parentheses necessary?
  //const dispatch = useContext(DispatchContext);
//const drumKitData = useDrumKitData();
//const isPowerOn = usePower();


return ( 
    <div id="display">
      <p>{state.isPowerOn ? drumKitData.displayText : ""}</p>
    </div>
  );
}