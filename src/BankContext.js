import React, { useState } from 'react';
import './Bank.js';


const bankContext = React.createContext(null);

export default function BankData() {

const bankOneData = {
    soundList: "kit1", displayText: "Heater Kit", /*kitOneIsActive: true*/
        };
const bankTwoData = {
    soundList: "kit2", displayText: "Smooth Piano Kit", /*kitOneIsActive: false*/
};

const bankData = kitOneIsActive ? bankOneData : bankTwoData;

}

