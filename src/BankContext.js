import React, { useState }/*, { useContext }*/ from 'react';

const whichBank = () => {
const BankContext = React.createContext();
const [currentBank, setBank] = useState(bankOneData);
//on click: setBank({bankOneData ? bankTwoData : bankOneData});

const bankOneData = {
soundList: "kit1", displayText: "Heater Kit", kitOneIsActive: true
};

const bankTwoData = {
    soundList: "kit2", displayText: "Smooth Piano Kit", kitOneIsActive: false
};

}

export default whichBank;