import React, { useContext } from 'react';
import './Bank.css';
import MasterContext from './MasterContext.js';
import { useBank, useBankUpdate } from'./BankContext.js';


function Bank(){
  
  //const kitOneIsActive = useBank();
  //const toggleKit = useBankUpdate();
  
  const { Bank, BankUpdate } = useContext(MasterContext);
  const [kitOneIsActive, setOtherKitActive] = Bank;
  const toggleKit = BankUpdate;

  return (
  
    <div id="bank">
      <div id="bank-switch-holder" onClick={toggleKit} tabIndex={0}>
        <div className={kitOneIsActive ? "switched" : null } id="bank-switch"></div>
      </div>
    </div>
  );
}

export default Bank;