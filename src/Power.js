import React, { useContext } from 'react';
import './Power.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { ACTIONS, DispatchContext, GlobalStateContext} from './MasterContext';




export default function Power(){

  const state = useContext(GlobalStateContext);
  const dispatch = useContext(DispatchContext);

  var powerButtonLabel = state.isPowerOn ? "Power button. Power is switched on." : "Power button. Power is switched off."

function switchPower(){
  dispatch({type: ACTIONS.TOGGLE_POWER});
}


    return (
        <div id="power">
            <button aria-label={powerButtonLabel} aria-live="polite" className={state.isPowerOn ? "power-on" : "power-off"} id="power-button" onClick={switchPower}>
              <FontAwesomeIcon icon={faPowerOff} aria-hidden="true" />
            </button>
        </div>
        );


}