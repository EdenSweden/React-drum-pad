import React, { useEffect, useContext } from 'react';
import './Buttons.css';
import { ACTIONS, DispatchContext, GlobalStateContext, useAudioRef, useButtonRef } from './MasterContext.js';


function Buttons(){

const globalState = useContext(GlobalStateContext);
const dispatch = useContext(DispatchContext);
const state = globalState.state;
const drumKitData = globalState.getDrumKitData(); //parentheses necessary?
const audioRef = useAudioRef();
const buttonRef = useButtonRef();

function buttonHover(e){
    
    return e.target.style.backgroundColor = "rgb(0, 230, 0)";
    
}
//this makes it permanently stay gray, even after keydown again. Fix this
function buttonExit(e){
    
    return e.target.style.backgroundColor = "gray";
}

/*this prints multiple different copies of the state to the console. Probably the bug*/
useEffect(() => {
    window.addEventListener('keydown', ()=>console.log(state));
    //window.addEventListener('keydown', state.isPowerOn ? (e)=>dispatch({type: ACTIONS.TAP_KEY, payload: [e, dispatch, state]}) : null);
    
    return ()=> {window.removeEventListener('keydown', ()=>console.log(state))};
    //return () => {window.removeEventListener('keydown', state.isPowerOn ? (e)=>dispatch({type: ACTIONS.TAP_KEY, payload: [e, dispatch, state]}) : null);
//};
}, [state.isPowerOn]);

/*useEffect(() => {
    /*window.addEventListener("keyup", ()=> buttonRef.current[i].style.backgroundColor = "gray");*/
    /*window.addEventListener("keyup", () => buttonRef.current[i].style.backgroundColor = "gray");
    return () => {window.removeEventListener("keyup", ()=> buttonRef.current[i].style.backgroundColor= "gray")}*/
    /*return () => {window.removeEventListener("keyup", ()=> buttonRef.current[i].style.backgroundColor = "gray")};
}, []);*/

return(

<div id="button-container">
    {drumKitData.buttonList.map((btn, index) => <button key={btn.letter} ref={(dpad)=> buttonRef.current.push(dpad)} onClick={state.isPowerOn ? (e)=>dispatch({type: ACTIONS.CLICK_PAD, payload: [e, dispatch, state]}) : null} /*onKeyUp={()=>buttonRef.current[index].blur()} onMouseUp={()=>buttonRef.current[index].blur()}*/ onMouseOver={state.isPowerOn ? buttonHover : null} onMouseOut={buttonExit} className="drum-pad" id={btn.letter}>{btn.letter}
        <audio ref={(ele) => audioRef.current.push(ele)} src={btn.url} preload="metadata" />
    </button>)}
</div>
)

}

export default Buttons;