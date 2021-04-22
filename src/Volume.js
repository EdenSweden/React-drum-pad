import React, { useRef, useEffect, useContext } from 'react';
import './Volume.css';
//import { useVolume, useUpdateVolume } from './VolumeContext.js';
import { ACTIONS, DispatchContext, GlobalStateContext } from './MasterContext';




export default function Volume(){

  const globalState = useContext(GlobalStateContext);
  const dispatch = useContext(DispatchContext);
  const state = globalState.state;

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
            onInput={(e)=>dispatch({type: ACTIONS.CHANGE_VOLUME, payload: e})}
            //ref={volumeRef}
          ></input>
        </div>
      );
}

