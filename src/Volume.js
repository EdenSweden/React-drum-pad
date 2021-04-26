import React, { useContext } from 'react';
import './Volume.css';
//import { useVolume, useUpdateVolume } from './VolumeContext.js';
import { ACTIONS, DispatchContext } from './MasterContext';




export default function Volume(){

  //const globalState = useContext(GlobalStateContext);
  const dispatch = useContext(DispatchContext);
  //const state = globalState.state;

  function changeVolume(e){

    const currentVolume = e.target.value / 100;
    //console.log(currentVolume);
    dispatch({type: ACTIONS.CHANGE_VOLUME, payload: currentVolume})
    //if volume is adjusted while sound is playing:
    /*if (state.isPlaying) {    
    changeVolume(e.target.value / 100);
    }*/
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
            /*value={state.currentVolume * 100} // will this make it unchangeable?*/
            onInput={changeVolume}
          ></input>
        </div>
      );
}

