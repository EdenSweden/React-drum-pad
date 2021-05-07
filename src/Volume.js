import React, { useContext } from 'react';
import './Volume.css';
import { ACTIONS, DispatchContext } from './MasterContext';




export default function Volume(){

  const dispatch = useContext(DispatchContext);


  function changeVolume(e){

    let currentVolume = (e.target.value / 100).toFixed(2);
    dispatch({type: ACTIONS.CHANGE_VOLUME, payload: currentVolume})
    
};

    return (
        <div id="volume">
          <label htmlFor="volume-switch">Volume</label>
          <input
            id="volume-switch"
            name="volume-switch"
            type="range"
            min="0"
            max="100"
            onInput={changeVolume}
          ></input>
        </div>
      );
}

