import React from 'react';
import './Machine.css';
import Buttons from './Buttons.js';
import Controls from './Controls.js';
import BankDataProvider from './BankContext.js';
import PowerButtonProvider from'./PowerButtonContext.js';
import VolumeProvider from './VolumeContext.js';
import AudioProvider from './AudioContext.js';
//import BankData, { currentBankData, BankContext } from './BankContext.js';

export default function Machine() {

  return (
  <BankDataProvider>
    <AudioProvider>
      <PowerButtonProvider>
        <VolumeProvider>
      <div id="drum-machine">
        <Buttons />
        <Controls />
      </div>
        </VolumeProvider>
      </PowerButtonProvider>
    </AudioProvider>
  </BankDataProvider>
  );
}