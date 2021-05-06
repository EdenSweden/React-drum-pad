import React, { useContext } from 'react';
import './Display.css';
import { GlobalStateContext} from './MasterContext';



export default function Display(){

const state = useContext(GlobalStateContext);



return ( 
    <div id="display">
      <p>{state.isPowerOn ? state.displayText : ""}</p>
    </div>
  );
}