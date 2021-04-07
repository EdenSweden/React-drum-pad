import React, { useState, useContext } from 'react';

//create volume context
const VolumeContext = React.createContext();
const UpdateVolumeContext = React.createContext();

//custom hooks for volume
export const useVolume = useContext(VolumeContext);
export const useUpdateVolume = useContext(UpdateVolumeContext);

const [ currentVolume, setCurrentVolume ] = useState(0.5);

const changeVolume = (e) =>{
    setCurrentVolume(e.target.value);
};

export default function VolumeProvider({ children }) {

return(
    <VolumeContext.Provider value={currentVolume}>
        <UpdateVolumeContext.Provider value={changeVolume}>
        {children}
        </UpdateVolumeContext.Provider> 
    </VolumeContext.Provider>

    );

}