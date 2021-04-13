import React,  { useContext, useState } from 'react';

//use all contexts here and create one master parent context provider with an object value with multiple items.

/* Context data to use:
//BANK CONTEXT:



//POWER BUTTON CONTEXT:

//AUDIO CONTEXT:

//VOLUME CONTEXT:



*/

const MasterContext = React.createContext();

export default function MasterContextProvider( { children }){


return(
<MasterContext.Provider value={null}>

{children}

</MasterContext.Provider>
)

}


