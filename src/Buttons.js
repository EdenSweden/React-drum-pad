import React, { useEffect, useContext } from 'react';
import './Buttons.css';
import { ACTIONS, DispatchContext, GlobalStateContext, DrumKitDataContext, useAudioRef, useButtonRef } from './MasterContext.js';


function Buttons(){

const state = useContext(GlobalStateContext);
const dispatch = useContext(DispatchContext);
const drumKitData = useContext(DrumKitDataContext); //parentheses necessary?
const audioRef = useAudioRef();
const buttonRef = useButtonRef();

    function buttonHover(e){
    
    return e.target.style.backgroundColor = "rgb(0, 230, 0)";
    
    }
    //this makes it permanently stay gray, even after keydown again. Fix this
    function buttonExit(e){
    
    return e.target.style.backgroundColor = "gray";
    }

    function handleAudioClick(e) {
    //console.log(e.target.children[0].attributes[0].nodeValue);
    //console.log(e.target.children[0]);
    //console.log(e.target.children[0].paused);
    const clickedSound = e.target.children[0].attributes[0].nodeValue;
    //console.log(clickedSound);
    for(let i = 0; i < drumKitData.buttonList.length; i++){
        if(clickedSound === audioRef.current[i].src){
            //console.log("currentVolume value: " + [...state].currentVolume);
            //console.log("volume: "+ audioRef.current[i].volume);
            dispatch({type: ACTIONS.IS_PLAYING});
            audioRef.current[i].play();
            dispatch({type: ACTIONS.IS_NOT_PLAYING});
            //on another click
            if (!audioRef.current[i].paused) {
              dispatch({type: ACTIONS.IS_PLAYING}); 
              audioRef.current[i].currentTime = 0;
                audioRef.current[i].play();
            }

            else if (audioRef.current[i].paused) {
                dispatch({type: ACTIONS.IS_NOT_PLAYING})
            }

            if(state.isPowerOn === false){
                audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
                dispatch({type: ACTIONS.IS_NOT_PLAYING});
            }
        }
        
    }
    dispatch({type: ACTIONS.CLICK_PAD});
};

function handleAudioKeyDown(e) {
    console.log(state.isPowerOn);
    //console.log(state.currentButton);
    for(let i = 0; i < drumKitData.buttonList.length; i++){
        if(e.keyCode === drumKitData.buttonList[i].keyCode){
            var currentButton = buttonRef.current[i];
            /*this dispatch action isn't changing currentButton in the statefor some reason.*/
            dispatch({type: ACTIONS.CHANGE_BUTTON, payload: currentButton})
            console.log(state.currentButton);
            //console.log(buttonRef.current[i]);
            currentButton.style.backgroundColor = 'rgb(0, 230, 0)';
            let currentSound = audioRef.current[i];
            //currentSound.volume = currentVolume;
           dispatch({type: ACTIONS.IS_PLAYING});
            currentSound.play();
            dispatch({type: ACTIONS.IS_NOT_PLAYING});
            //on another tap
            if (!currentSound.paused) {
                dispatch({type: ACTIONS.IS_PLAYING})
                //audioRef.current[i].pause();
                currentSound.currentTime = 0;
                currentSound.play();
                dispatch({type: ACTIONS.IS_NOT_PLAYING})
            }
            else if(currentSound.paused){
                dispatch({type: ACTIONS.IS_NOT_PLAYING});
            }
            //may need to use useEffect on the component so this doesn't cause issues
            /*window.addEventListener("keyup", ()=>buttonRef.current[i].style.backgroundColor = "gray");
            return window.removeEventListener("keyup", ()=>buttonRef.current[i].style.backgroundColor = "gray");*/
            
            
            //change this?
            /*else if(!useAudioRef.current[i].paused && !state.isPowerOn){
                useAudioRef.current[i].pause();
                useAudioRef.current[i].currentTime = 0;
            }*/

            //useAudioRef.current[i].play();
            //i = drumKitData.buttonList.length;
            //return currentButton;
        }
    }
}
/*this prints multiple conflicting copies of the state to the console. Probably the bug*/
useEffect(() => {
    window.addEventListener('keydown', state.isPowerOn ? (e)=> handleAudioKeyDown(e) : null);
    //window.addEventListener('keydown', state.isPowerOn ? (e)=>dispatch({type: ACTIONS.TAP_KEY, payload: [e, dispatch, state]}) : null);
    
    return ()=> {window.removeEventListener('keydown', state.isPowerOn ? (e)=> handleAudioKeyDown(e) : null)};
    //return () => {window.removeEventListener('keydown', state.isPowerOn ? (e)=>dispatch({type: ACTIONS.TAP_KEY, payload: [e, dispatch, state]}) : null);
//};
}, [state.isPowerOn]);


useEffect(() => {
    window.addEventListener("keyup", ()=> /*state.currentButton.style.backgroundColor = "gray"*/ console.log(state.currentButton));

    return () => {window.removeEventListener("keyup", ()=> console.log(state.currentButton)/*state.currentButton.style.backgroundColor= "gray"*/)}

}, []);

return(

<div id="button-container">
    {drumKitData.buttonList.map((btn, index) => <button key={btn.letter} ref={(dpad)=> buttonRef.current.push(dpad)} onClick={state.isPowerOn ? handleAudioClick  : null} /*onKeyUp={()=>buttonRef.current[index].style.backgroundColor = "gray"}*/ /*onMouseUp={()=>buttonRef.current[index].style.backgroundColor = "gray"}*/ onMouseOver={state.isPowerOn ? buttonHover : null} onMouseOut={buttonExit} className="drum-pad" id={btn.letter}>{btn.letter}
        <audio ref={(ele) => audioRef.current.push(ele)} src={btn.url} preload="metadata" />
    </button>)}
</div>
)

}

export default Buttons;