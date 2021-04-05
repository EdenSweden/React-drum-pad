import React from 'react';
import './Bank.css';
import BankDataProvider, { useBank, useBankUpdate } from'./BankContext.js';


function Bank(){
  
  const kitOneIsActive = useBank();
  const toggleKit = useBankUpdate();
  //const [kitOneIsActive, setKit] = useState(true);

  //const [bankData, toggleBankData] = useState({bankOneData});

  /*const toggleKit = () => {
    setKit(!kitOneIsActive);
    console.log(kitOneIsActive, BankContext);
 
  }*/

  /*switchBank function below should be unnecessary because BankData will decide which is the correct data set based on whether kitOneIsActive = true. test this*/

  /*const switchBank = () =>{
    toggleBankData(kitOneIsActive ? bankOneData : bankTwoData);
  }*/
/*const [kitOneIsActive, setKit] = useState(false);

//should this toggleKit function/state be passed up to the context or parent?
const toggleKit = () => {
    setKit(!kitOneIsActive);
    console.log(kitOneIsActive);
}*/
//now that the above is being imported from BankContext.js, will the onClick function still work?
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