import React, { useContext } from 'react';
import './Display.css';
import { GlobalStateContext} from './MasterContext';



export default function Display(){

const state = useContext(GlobalStateContext);




return ( 
    <div id="display"tabIndex={0} aria-label={state.isPowerOn ? "Display screen says: " + state.displayText +".": "Empty display screen."}>
      <p>{state.isPowerOn ? state.displayText : " "}</p>
    </div>
  );
}