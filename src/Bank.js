import React, { useContext } from 'react';
import './Bank.css';
import { ACTIONS, DispatchContext, GlobalStateContext } from './MasterContext';


export default function Bank(){
  
const state = useContext(GlobalStateContext);
const dispatch = useContext(DispatchContext);

  return (
    <div id="bank">
      <div id="bank-switch-holder" onClick={()=>dispatch({type: ACTIONS.TOGGLE_BANK})} tabIndex={0}>
        <div className={state.kitOneIsActive ? "switched" : null } id="bank-switch"></div>
      </div>
    </div>
  );
}