import React, { useContext } from 'react';
import './Bank.css';
import { ACTIONS, DispatchContext, GlobalStateContext } from './MasterContext';


export default function Bank(){
  
const state = useContext(GlobalStateContext);
const dispatch = useContext(DispatchContext);

  return (
    <div id="bank">
      <div id="bank-switch-holder" onClick={()=>dispatch({type: ACTIONS.TOGGLE_BANK})}>
        <input title="switch sound bank" type="button" aria-label={state.drumKitData.displayText +" is active. "  + "Switch sound bank."} className={state.kitOneIsActive ? "switched" : null } id="bank-switch"></input>
      </div>
    </div>
  );
}