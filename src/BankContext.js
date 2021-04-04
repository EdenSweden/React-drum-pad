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

export function BankDataProvider({ children }) {

const [kitOneIsActive, setOtherKit] = useState(true);

function toggleKit () {

    setOtherKit(prevKit => !prevKit);
}


const bankOneData = {
    soundList: "kit1", displayText: "Heater Kit", /*kitOneIsActive: true*/
        };
const bankTwoData = {
    soundList: "kit2", displayText: "Smooth Piano Kit", /*kitOneIsActive: false*/
};

const currentBankData = kitOneIsActive ? bankOneData : bankTwoData;
//should value be kitOneIsActive or currentBankData?
return <BankContext.Provider value={kitOneIsActive}>
    <BankUpdateContext.Provider value={toggleKit}>
    { children }
    </BankUpdateContext.Provider>
    
</BankContext.Provider>

};