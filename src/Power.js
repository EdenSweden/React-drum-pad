import React, { useContext } from 'react';
import './Power.css';
/*import { library } from '@fortawesome/fontawesome-svg-core';*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
//import { usePower, usePowerToggle } from './PowerButtonContext.js';
import { ACTIONS, DispatchContext, GlobalStateContext } from './MasterContext';




export default function Power(){

  const state = useContext(GlobalStateContext);
  const dispatch = useContext(DispatchContext);

/*const isPowerOn = usePower();
const togglePower = usePowerToggle();*/
function switchPower(){
  dispatch({type: ACTIONS.TOGGLE_POWER});
}


    return (
        <div id="power">
            <button className={state.isPowerOn ? "power-on" : "power-off"} id="power-button" onClick={switchPower}>
              <FontAwesomeIcon icon={faPowerOff} aria-hidden="true" />
            </button>
        </div>
        );


}