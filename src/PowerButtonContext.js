import React, { useState, useContext } from 'react';

const PowerButtonContext = React.createContext();
const PowerToggleContext = React.createContext();



//custom hooks for context providers

export function usePower() {
    return useContext(PowerButtonContext);
}

export function usePowerToggle() {
    return useContext(PowerToggleContext);
}
//powerButtonContext:
export default function PowerButtonProvider({ children }){

const [isPowerOn, setPower] = useState(false);

//powerToggleContext:    
function togglePower(){

    setPower(!isPowerOn);
    //console.log(isPowerOn);
    //console.log(isPowerOn ? "power-on" : "power-off");
    
}

return (
<PowerButtonContext.Provider value={isPowerOn}>
    <PowerToggleContext.Provider value={togglePower}>
    {children}
    </PowerToggleContext.Provider>
</PowerButtonContext.Provider>

);
}