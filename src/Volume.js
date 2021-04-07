import React from 'react';
import './Volume.css';
import { useVolume, useUpdateVolume } from './VolumeContext.js';


function Volume(){

    const currentVolume = useVolume();
    const changeVolume = useUpdateVolume();

    return (
        <div id="volume">
          <label htmlFor="volume-switch">Volume</label>
          <input
            id="volume-switch"
            name="volume-switch"
            type="range"
            min="0"
            max="100"
            value={currentVolume * 100}
            onInput={changeVolume}
          ></input>
        </div>
      );
}

export default Volume;