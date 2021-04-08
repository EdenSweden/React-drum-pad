import React, { useState, useContext } from 'react';
import Buttons, { audioRef } from './Buttons.js';
//create volume context
const VolumeContext = React.createContext();
const UpdateVolumeContext = React.createContext();



//custom hooks for volume
export function useVolume() { 
    return useContext(VolumeContext);
}
export function useUpdateVolume(){
    return useContext(UpdateVolumeContext);
}

export default function VolumeProvider({ children }) {

const [ currentVolume, setCurrentVolume ] = useState(0.5);

function changeVolume(e) {
    setCurrentVolume(e.target.value / 100);
    //if volume is adjusted while sound is playing:
    /*if (!audioRef.current[i].paused) {    
    setCurrentVolume(e.target.value / 100);
    }*/
};

return(
    <VolumeContext.Provider value={currentVolume}>
        <UpdateVolumeContext.Provider value={changeVolume}>
        {children}
        </UpdateVolumeContext.Provider> 
    </VolumeContext.Provider>

    );

}