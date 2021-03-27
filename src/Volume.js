import React from 'react';
import './Volume.css';


function Volume(){
    return (
        <div id="volume">
          <label htmlFor="volume-switch">Volume</label>
          <input
            id="volume-switch"
            name="volume-switch"
            type="range"
            min="0"
            max="100"
          ></input>
        </div>
      );
}

export default Volume;