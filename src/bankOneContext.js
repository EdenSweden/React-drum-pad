import React, { useState } from 'react';


const bankContext = React.createContext(null);
//const [currentBank, setBank] = useState(bankOneData);

export default function BankOneData() {

    //is this the right place for the useState to be? shouldn't it be in the parent component file, Machine.js?
const [bankData, toggleBankData] = useState(bankOneData);
}

let bankData = {
    soundList: "kit1", displayText: "Heater Kit", kitOneIsActive: true
        }


/*const switchBank = () => {
    setBank(bankOneData ? bankTwoData : bankOneData);
    }*/