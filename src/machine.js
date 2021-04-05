import React from 'react';
import './Machine.css';
import Buttons from './Buttons.js';
import Controls from './Controls.js';
import BankDataProvider from './BankContext.js';
import PowerButtonProvider from'./PowerButtonContext.js';
//import BankData, { currentBankData, BankContext } from './BankContext.js';

export default function Machine() {

  return (
    <PowerButtonProvider>
      <BankDataProvider>
      <div id="drum-machine">
        <Buttons />
        <Controls />
      </div>
      </BankDataProvider>
    </PowerButtonProvider>
  );
}