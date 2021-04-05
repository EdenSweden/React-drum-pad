import React from 'react';
import './Machine.css';
import Buttons from './Buttons.js';
import Controls from './Controls.js';
import BankDataProvider from './BankContext.js';
//import BankData, { currentBankData, BankContext } from './BankContext.js';

export default function Machine() {

  return (
      <BankDataProvider>
      <div id="drum-machine">
        <Buttons />
        <Controls />
      </div>
      </BankDataProvider>
  );
}