import React, { useState } from 'react';
import './Bank.css';
import './BankContext.js';

function Bank(){

const [kitOneIsActive, setKit] = useState(false);

//should this toggleKit function/state be passed up to the context or parent?
const toggleKit = () => {
    setKit(!kitOneIsActive);
    console.log(kitOneIsActive);
}

//wrap the below component in bankContext.Provider value={kitOneIsActive ? bankOneData: bankTwoData}/>
  return (
  
    <div id="bank">
      <div id="bank-switch-holder" onClick={toggleKit}>
        <div className={kitOneIsActive ? "switched" : null } id="bank-switch"></div>
      </div>
    </div>
  );
}

export default Bank;