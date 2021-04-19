import React from 'react';
import './Power.css';
/*import { library } from '@fortawesome/fontawesome-svg-core';*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
//import { usePower, usePowerToggle } from './PowerButtonContext.js';
import { DispatchContext, GlobalStateContext } from './MasterContext';




function Power(){

const dispatch = useContext(DispatchContext);
const state = useContext(GlobalStateContext);

/*const isPowerOn = usePower();
const togglePower = usePowerToggle();*/


    return (
        <div id="power">
            <button className={isPowerOn ? "power-on" : "power-off"} id="power-button" onClick={()=> dispatch({type: ACTIONS.TOGGLE_POWER, payload: state.isPowerOn})}>
              <FontAwesomeIcon icon={faPowerOff} aria-hidden="true" />
            </button>
        </div>
        );


}


export default Power;