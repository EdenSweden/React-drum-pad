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
  <AudioProvider>
    <PowerButtonProvider>
      <BankDataProvider>
        <VolumeProvider>
      <div id="drum-machine">
        <Buttons />
        <Controls />
      </div>
        </VolumeProvider>
      </BankDataProvider>
    </PowerButtonProvider>
  </AudioProvider>
  );
}