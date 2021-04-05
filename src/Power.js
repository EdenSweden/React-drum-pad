import React from 'react';
import './Power.css';
/*import { library } from '@fortawesome/fontawesome-svg-core';*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { usePower, usePowerToggle } from './PowerButtonContext.js';


const isPowerOn = usePower();
const togglePower = usePowerToggle();

function Power(){

    return (
        <div id="power">
            <button id="power-button" onClick={togglePower} className={isPowerOn ? "power-on" : null}>
              <FontAwesomeIcon icon={faPowerOff} aria-hidden='true' />
            </button>
        </div>
        );


}


export default Power;