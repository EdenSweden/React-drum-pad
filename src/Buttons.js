import React from 'react';
import './Buttons.css';
//edit buttons code here
const buttons = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];


function Buttons(){
return(
<div id="button-container">
    {buttons.map((btn) => <button className="drum-pad" id={btn}>{btn}</button>)}
</div>
)



}

export default Buttons;