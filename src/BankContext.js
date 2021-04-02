import React, { useState }/*, { useContext }*/ from 'react';


const BankContext = React.createContext();
const [currentBank, setBank] = useState(bankOneData);

//create two separate context files for each bank?

const bankOneData = {
soundList: "kit1", displayText: "Heater Kit", kitOneIsActive: true
};

const bankTwoData = {
    soundList: "kit2", displayText: "Smooth Piano Kit", kitOneIsActive: false
};

const switchBank = () => {
    setBank(bankOneData ? bankTwoData : bankOneData);
    }