import React, { useRef, useEffect } from 'react';
import './Volume.css';
import { useVolume, useUpdateVolume } from './VolumeContext.js';


function Volume(){

    const currentVolume = useVolume();
    const changeVolume = useUpdateVolume();

    //const volumeRef = useRef();

    //volumeRef.addEventListener is not a function. use .current with it
    /*useEffect(() => {
        volumeRef.current.addEventListener('input', changeVolume);

        return () => {volumeRef.current.removeEventListener('input', changeVolume);
      };

    });*/

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
            //ref={volumeRef}
          ></input>
        </div>
      );
}

export default Volume;