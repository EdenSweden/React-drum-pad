import React, { useContext } from 'react';
import './Power.css';
/*import { library } from '@fortawesome/fontawesome-svg-core';*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
//import { usePower, usePowerToggle } from './PowerButtonContext.js';
import { ACTIONS, DispatchContext, GlobalStateContext } from './MasterContext';




export default function Power(){

  const globalState = useContext(GlobalStateContext);
  const dispatch = useContext(DispatchContext);
  const state = globalState.state;

/*const isPowerOn = usePower();
const togglePower = usePowerToggle();*/


    return (
        <div id="power">
            <button className={state.isPowerOn ? "power-on" : "power-off"} id="power-button" onClick={()=> dispatch({type: ACTIONS.TOGGLE_POWER})}>
              <FontAwesomeIcon icon={faPowerOff} aria-hidden="true" />
            </button>
        </div>
        );


}