import React from 'react';
import './Controls.css';
import Power from './Power.js';
import Volume from './Volume.js';
import Display from './Display.js';
import Bank from './Bank.js';
//converted the following from a class component to a functional component with hooks:
function Controls () {
  
      return (
        <div id="controls">
          <Power />
          <Volume />
          <Display />
          <Bank />
        </div>
      );
  }
  
  export default Controls;