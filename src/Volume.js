import React from 'react';
import './Volume.css';
import { useVolume, useUpdateVolume } from './VolumeContext.js';


function Volume(){

    const currentVolume = useVolume();
    const changeVolume = updateVolume();
      
    return (
        <div id="volume">
          <label htmlFor="volume-switch">Volume</label>
          <input
            id="volume-switch"
            name="volume-switch"
            type="range"
            min="0"
            max="100"
            onInput={(e)=>console.log(e.target.value)}
          ></input>
        </div>
      );
}

export default Volume;