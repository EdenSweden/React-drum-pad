import React, { useState, useContext } from 'react';
import './Bank.css';
import './bankOneContext.js';


function Bank(props){
  const [kitOneIsActive, setKit] = useState(true);

  const toggleKit = () => {
    setKit(!kitOneIsActive);  
    //setKit(bankOneData ? bankTwoData : bankOneData);
  }
/*const [kitOneIsActive, setKit] = useState(false);

//should this toggleKit function/state be passed up to the context or parent?
const toggleKit = () => {
    setKit(!kitOneIsActive);
    console.log(kitOneIsActive);
}*/
//now that the above is being imported from BankContext.js, will the onClick function still work?
//wrap the below component in bankContext.Provider value={kitOneIsActive ? bankOneData: bankTwoData}/>
  return (
  <BankContext.Provider value={currentBank}>
    <div id="bank">
      <div id="bank-switch-holder" onClick={toggleKit, props.switchBank}>
        <div className={kitOneIsActive ? null : "switched" } id="bank-switch"></div>
      </div>
    </div>
    </BankContext.Provider>
  );
}

export default Bank;