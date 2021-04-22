import React, { useEffect, useContext } from 'react';
import './Buttons.css';
import { ACTIONS, DispatchContext, GlobalStateContext, useAudioRef, useButtonRef } from './MasterContext.js';


function Buttons(){

const globalState = useContext(GlobalStateContext);
const dispatch = useContext(DispatchContext);
const state = globalState.state;
const drumKitData = globalState.drumKitData;
const audioRef = useAudioRef();
const buttonRef = useButtonRef();

function buttonHover(e){
    
    return e.target.style.backgroundColor = "rgb(0, 230, 0)";
}
//this makes it permanently stay gray, even after keydown again. Fix this
function buttonExit(e){
    return e.target.style.backgroundColor = "gray";
}

useEffect(() => {

    window.addEventListener('keydown', state.isPowerOn ? (e)=>dispatch({type: ACTIONS.TAP_KEY, payload: e/*drumKitData*/}) : null);

    return () => {window.removeEventListener('keydown', (e)=>dispatch({type: ACTIONS.TAP_KEY, payload: e/*drumKitData*/}));
};
});


return(

<div id="button-container">
    {drumKitData.buttonList.map((btn, index) => <button key={btn.letter} ref={(dpad)=> buttonRef.current.push(dpad)} onClick={state.isPowerOn ? ()=>dispatch({type: ACTIONS.CLICK_PAD, payload: drumKitData}) : null} onKeyUp={()=>buttonRef.current[index].blur()} onMouseUp={()=>buttonRef.current[index].blur()} onMouseOver={state.isPowerOn ? buttonHover : null} onMouseOut={buttonExit} className="drum-pad" id={btn.letter}>{btn.letter}
        <audio ref={(ele) => audioRef.current.push(ele)} src={btn.url} preload="metadata" />
    </button>)}
</div>
)

}

export default Buttons;