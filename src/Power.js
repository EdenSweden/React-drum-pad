import React from 'react';
import './Power.css';
/*import { library } from '@fortawesome/fontawesome-svg-core';*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { /*fas,*/ faPowerOff } from '@fortawesome/free-solid-svg-icons';

function Power(){

    return (
        <div id="power">
            <button id="power-button">
              <FontAwesomeIcon icon={faPowerOff} aria-hidden='true' />
              {/*<i className="fa fa-power-off" aria-hidden="true"></i>*/}
            </button>
        </div>
        );


}


export default Power;