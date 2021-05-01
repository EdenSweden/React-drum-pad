import React, { useEffect, useContext, useState, useMemo /*useCallback*/ } from 'react';
import './Buttons.css';
import { ACTIONS, DispatchContext, GlobalStateContext, DrumKitDataContext, useAudioRef, useButtonRef } from './MasterContext.js';


function Buttons(){

const state = useContext(GlobalStateContext);
const dispatch = useContext(DispatchContext);
const drumKitData = useContext(DrumKitDataContext);
const audioRef = useAudioRef();
const buttonRef = useButtonRef();

const [buttonIndex, setButtonIndex] = useState([]);

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
    for(let i = 0; i < getDrumKitData.buttonList.length; i++){
        if(clickedSound === audioRef.current[i].src){
            audioRef.current[i].volume = state.currentVolume;
            console.log("audioRef volume: " + audioRef.current[i].volume);
            console.log("state volume: " + state.currentVolume);
            //console.log("currentVolume value: " + [...state].currentVolume);
            //console.log("volume: "+ audioRef.current[i].volume);
            //dispatch({type: ACTIONS.IS_PLAYING});
            audioRef.current[i].play();
            //dispatch({type: ACTIONS.IS_NOT_PLAYING});
            //on another click
            if (!audioRef.current[i].paused) {
              //dispatch({type: ACTIONS.IS_PLAYING}); 
              audioRef.current[i].currentTime = 0;
                audioRef.current[i].play();
            }

            /*else if (audioRef.current[i].paused) {
                dispatch({type: ACTIONS.IS_NOT_PLAYING})
            }*/

            if(state.isPowerOn === false){
                audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
                //dispatch({type: ACTIONS.IS_NOT_PLAYING});
            }
        }
        
    }
    //dispatch({type: ACTIONS.CLICK_PAD});
};
/*maybe don't invoke drumKitData.buttonList.length? instead say 8? Or is that not useful because it's not reproduceable?*/
function handleAudioKeyDown /*= useCallback(*/(e) /*=>*/ {
    //the problem is, it might not change the timesPlayed if the prev sound isn't done playing.
    if(state.isPowerOn === true) {
    for(let i = 0; i < getDrumKitData.buttonList.length; i++){
        /*does this dangerously mutate an array? Will it cause problems if this function is initialized within the loop?*/
        function addButtonIndex(){
            setButtonIndex((prevIndices) => [...prevIndices, i]);
            
        }

        function removeButtonIndex(){
            /*use filter method to make the bg-color green for all button indices that are in the array on keyup, and then empty the array*/
            setButtonIndex([]);
        }
        
        //console.log(buttonRef.current[i].style.backgroundColor);
        if(e.keyCode === getDrumKitData.buttonList[i].keyCode){
            const currentButton = buttonRef.current[i];
            
            //console.log("i: " + i);
            addButtonIndex(i);
            //console.log("buttonIndex: " + buttonIndex);
            //console.log("state.buttonRefIndex: " + state.buttonRefIndex);
            
            currentButton.style.backgroundColor = 'rgb(0, 230, 0)';
            //console.log(buttonRef.current[i]);
            let currentSound = audioRef.current[i];
            currentSound.volume = state.currentVolume;
            //console.log(currentSound.volume);
            currentSound.play();
            dispatch({type: ACTIONS.CHANGE_TIMES_PLAYED});
            //on another tap
            //create useEffect?
            /* problem is that if another sound is played before prev is finished, the buttonRef index doesn't match the prev sound index and the prev button stays green. */
            //currentSound.onended = makeButtonGray();/*() => currentButton.style.backgroundColor = "gray";*/
            //why does it add i three times?            
            //dispatch({type: ACTIONS.ADD_BUTTON_INDEX, payload: [...previndices, i]});
            //console.log("state.buttonRefIndex: " + state.buttonRefIndex);
            //breaks from loop
            //return i = drumKitData.buttonList.length;
            /*if (!currentSound.ended) {
                /*this will only make prevbutton gray. not previous pushed button:*/
                //instead maybe create array of active buttons in the state
                //buttonRef.current[state.buttonRefIndex].style.backgroundColor = "gray";
                //audioRef.current[i].pause();
                /*currentSound.currentTime = 0;
                currentSound.play();
            dispatch({type: ACTIONS.CHANGE_TIMES_PLAYED});
            //currentSound.onended = makeButtonGray();
                //dispatch({type: ACTIONS.IS_NOT_PLAYING})
            }*/
            /*else if(currentSound.ended){
                //makeButtonGray();
            }*/  
            /*else if(!useAudioRef.current[i].paused && !state.isPowerOn){
                audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
            }*/

            //audioRef.current[i].play();
            //console.log(currentButton);
            //return currentButton;
            //break from loop:
        //i = drumKitData.buttonList.length;
        }
        //i = drumKitData.buttonList.length;
    }
    
} else if(state.isPowerOn === false){
    return null;
    }
    
}/*, [/*audioRef, buttonRef, dispatch, drumKitData.buttonList, /*state.buttonRefIndex, *//*state.isPowerOn]);*/
/*are all the above dependencies necessary? Only the last two seem crucial because the others shouldn't change. Make sure they don't. (unless you add useEffect for drumKitData*/
useEffect(() => {
    window.addEventListener('keydown', (e)=> handleAudioKeyDown(e));
    //window.addEventListener('keydown', state.isPowerOn ? (e)=>dispatch({type: ACTIONS.TAP_KEY, payload: [e, dispatch, state]}) : null);
    
    return ()=> {window.removeEventListener('keydown', (e)=> handleAudioKeyDown(e))};
    //return () => {window.removeEventListener('keydown', state.isPowerOn ? (e)=>dispatch({type: ACTIONS.TAP_KEY, payload: [e, dispatch, state]}) : null);
//};
}, [state.isPowerOn/*handleAudioKeyDown*/]);
//is this making handleAudioKeyDown loop a ridiculous number of times?
//test background color

//may need to use an array method, since there can be multiple active indices
function makeButtonGray(){
    /*if(buttonRef.current[buttonIndex] >= 0 && buttonRef.current[buttonIndex] < 10){*/
        console.log("audioRef.current: " + audioRef.current);
        console.log("buttonRef.current: " + buttonRef.current);
        /*IDEA:*///audioRef.current.filter(sound => console.log(sound.ended));

    //return buttonRef.current[buttonIndex].style.backgroundColor = "gray";
    /*} else {
        return null;
    }*/
}

useEffect(() => {
    window.addEventListener("keyup", makeButtonGray);

    return ()=>{window.removeEventListener("keyup", makeButtonGray)}

}, [state.timesPlayed, buttonIndex]);

return(

<div id="button-container">
    {getDrumKitData.buttonList.map((btn, index) => <button key={btn.letter} ref={(dpad)=> buttonRef.current.push(dpad)} /*style={{backgroundColor: state.currentButtonColor}}*/onClick={state.isPowerOn ? handleAudioClick  : null} /*onKeyUp={()=>console.log("keyup detected")}*/ /*onMouseUp={()=>console.log("mouseup detected")}*/ onMouseOver={state.isPowerOn ? buttonHover : null} onMouseOut={buttonExit} className="drum-pad" id={btn.letter}>{btn.letter}
        <audio ref={(ele) => audioRef.current.push(ele)} src={btn.url} preload="metadata" />
    </button>)}
</div>
)

}

export default Buttons;