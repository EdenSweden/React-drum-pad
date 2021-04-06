import React, { useState } from 'react';
import './Power.css';
/*import { library } from '@fortawesome/fontawesome-svg-core';*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { usePower, usePowerToggle } from './PowerButtonContext.js';




function Power(){

const isPowerOn = usePower();
const togglePower = usePowerToggle();


    return (
        <div id="power">
            <button className={isPowerOn ? "power-off" : "power-on"} id="power-button" onClick={togglePower}>
              <FontAwesomeIcon icon={faPowerOff} aria-hidden="true" />
            </button>
        </div>
        );


}


export default Power;