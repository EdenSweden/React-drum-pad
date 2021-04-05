import React, { useState, useContext } from 'react';
//import kitOneIsActive from './Bank.js';


export const BankContext = React.createContext();
export const BankUpdateContext = React.createContext();


export function useBank() {
    return useContext(BankContext);
}

export function useBankUpdate(){
    return useContext(BankUpdateContext);
}

//BankContext:
export default function BankDataProvider({ children }) {

const bankOneData = {
    soundList: kitOne, displayText: "Heater Kit", /*kitOneIsActive: true*/
        };
const bankTwoData = {
    soundList: kitTwo, displayText: "Smooth Piano Kit", /*kitOneIsActive: false*/
};

const [kitOneIsActive, setOtherKitActive] = useState(true);

//use useState here and create another context?
//const [currentBankData, switchCurrentBankData] = useState(bankOneData);
const currentBankData = bankOneData;
//BankUpdateContext:
function toggleKit () {

    setOtherKitActive(prevKit => !prevKit);
    currentBankData = kitOneIsActive ? bankOneData : bankTwoData;
    console.log(currentBankData.soundList);
}



//values below may need to be changed?
return <BankContext.Provider value={{kitOneIsActive, bankOneData, bankTwoData, currentBankData}}>
    <BankUpdateContext.Provider value={{toggleKit, bankOneData, bankTwoData, currentBankData}}>
    { children }
    </BankUpdateContext.Provider>
    
</BankContext.Provider>

};