import React, { useState } from 'react';
import './Display.css';
import './BankContext.js';



function Display(){



return (
    <div id="display">
      <p>{bankData.displayText}</p>
    </div>
  );
}

export default Display;