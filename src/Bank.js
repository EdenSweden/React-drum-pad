import React, { useContext } from 'react';
import './Bank.css';
import { ACTIONS, DispatchContext, GlobalStateContext } from './MasterContext';


export default function Bank(){
  
const state = useContext(GlobalStateContext);
const dispatch = useContext(DispatchContext);

  return (
    <div id="bank">
      <div id="bank-switch-holder" onClick={()=>dispatch({type: ACTIONS.TOGGLE_BANK})}>
        <input type="button" aria-label={"Switch drum kits." + state.drumKitData.displayText} className={state.kitOneIsActive ? "switched" : null } id="bank-switch"></input>
      </div>
    </div>
  );
}