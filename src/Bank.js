import React from 'react';
import './Bank.css';
import { useBank, useBankUpdate } from'./BankContext.js';


function Bank(){
  
  const kitOneIsActive = useBank();
  const toggleKit = useBankUpdate();
  

  return (
  
    <div id="bank">
      <div id="bank-switch-holder" onClick={toggleKit}>
        <div className={kitOneIsActive ? "switched" : null } id="bank-switch"></div>
      </div>
    </div>
  );
}

export default Bank;