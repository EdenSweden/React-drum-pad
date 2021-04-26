import React, { useContext } from 'react';
import './Display.css';
import { GlobalStateContext, DrumKitDataContext } from './MasterContext';
//import {useDrumKitData} from './BankContext.js';
//import { usePower } from './PowerButtonContext.js';




export default function Display(){

const state = useContext(GlobalStateContext);
const drumKitData = useContext(DrumKitDataContext); //parentheses necessary?
  //const dispatch = useContext(DispatchContext);
//const drumKitData = useDrumKitData();
//const isPowerOn = usePower();


return ( 
    <div id="display">
      <p>{state.isPowerOn ? drumKitData.displayText : ""}</p>
    </div>
  );
}