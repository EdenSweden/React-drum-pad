import React, { useContext } from 'react';

const bankContext = React.createContext();

const bankOneData = {
soundList: "kit1", displayText: "Heater Kit", kitOneIsActive: true
};

const bankTwoData = {
    soundList: "kit2", displayText: "Smooth Piano Kit", kitOneIsActive: false
};

export default { bankOneData }; 
export default { bankTwoData };