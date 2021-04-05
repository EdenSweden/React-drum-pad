import React, { useState, useContext } from 'react';

const powerButtonContext = React.createContext();
const powerToggleContext = React.createContext();

const [isPowerOn, setPower] = useState(false);

//custom hooks for context providers

export const usePower = useContext(powerButtonContext);
export const usePowerToggle = useContext(powerToggleContext);

//powerButtonContext:
export default function PowerButtonProvider({ children }){

//powerToggleContext:    
function togglePower(){

    setPower(!isPowerOn);
    
}

return (
<PowerButtonContext.Provider value={isPowerOn}>
    <powerToggleContext.Provider value={togglePower}>
    {children}
    </powerToggleContext.Provider>
</PowerButtonContext.Provider>

);
}