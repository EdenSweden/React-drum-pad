import React, { useContext } from 'react';
import './Bank.css';
//import MasterContext from './MasterContext.js';
//import { useBank, useBankUpdate } from'./BankContext.js';
import { ACTIONS, DispatchContext, GlobalStateContext } from './MasterContext';


function Bank(){
  
  const state = React.useContext(GlobalStateContext);
  const dispatch = React.useContext(DispatchContext);
  //const kitOneIsActive = useBank();
  //const toggleKit = useBankUpdate();
  
  //const { Bank, BankUpdate } = useContext(MasterContext);
  //const [kitOneIsActive, setOtherKitActive] = Bank;
  //const toggleKit = BankUpdate;

  return (
  //payload for dispatch action is kitOneIsActive?
    <div id="bank">
      <div id="bank-switch-holder" onClick={()=>dispatch({type: ACTIONS.TOGGLE_BANK})} tabIndex={0}>
        <div className={state.kitOneIsActive ? "switched" : null } id="bank-switch"></div>
      </div>
    </div>
  );
}

export default Bank;