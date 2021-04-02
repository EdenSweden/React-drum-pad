import React, { useState } from 'react';
import './Controls.css';
import Power from './Power.js';
import Volume from './Volume.js';
import Display from './Display.js';
import Bank from './Bank.js';
//converted the following from a class component to a functional component with hooks:
function Controls () {
    
    const [bank, setBank] = useState("kit1");
    
  //MAKE SURE THE SYNTAX FOR THE BELOW FUNCTION IS CORRECT
    const handleSwitchKit = () => {

      setBank("kit1" ? "kit2" : "kit1");
        
    }
  
      return (
        <div id="controls">
          <Power />
          <Volume />
          <Display />
          <Bank switchKit={handleSwitchKit} />
        </div>
      );
  }
  
  export default Controls;