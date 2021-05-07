import React from 'react';
import './Controls.css';
import Power from './Power';
import Volume from './Volume';
import Display from './Display';
import Bank from './Bank';

export default function Controls () {
  
      return (
        <div id="controls">
          <Power />
          <Volume />
          <Display />
          <Bank />
        </div>
      );
  }