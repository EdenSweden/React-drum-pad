import React, { useEffect, useContext/*, useMemo, useCallback*/ } from 'react';
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
/*use useMemo hook to cache the result of what currentButton is below? 
but what dependency will make it run again? Maybe make separate function above it to store it in and make the return statement a useMemo statement. Then you can access the currentButton in the makeButtonGray function until a button (MAKE SURE THIS AN INCLUDE THE SAME BUTTON) is pressed again.*/
/*const currentButton = useMemo(()=>{
    return buttonRef.current[i];
}, [buttonRef.current[i]])*///see if this still works if same button pressed twice


function handleAudioKeyDown(e) {
    //the problem is, it might not change the keydown count if the prev sound isn't done playing.
    if(state.isPowerOn === true) {
    for(let i = 0; i < drumKitData.buttonList.length; i++){
        //console.log(buttonRef.current[i].style.backgroundColor);
        if(e.keyCode === drumKitData.buttonList[i].keyCode){
            const currentButton = buttonRef.current[i];
            //maybe make the index an array instead, since multiple sounds can play at the same time?
            //this dispatch action is not working!
            console.log("i: " + i);
            dispatch({type: ACTIONS.CHANGE_BUTTON_INDEX, payload: i});
            //var currentButtonColor = 'rgb(0, 230, 0)';
            /*dispatch({type: ACTIONS.CHANGE_BUTTON_COLOR, payload: currentButtonColor});*/
            currentButton.style.backgroundColor = 'rgb(0, 230, 0)';
            //console.log(buttonRef.current[i]);
            let currentSound = audioRef.current[i];
            //currentSound.volume = currentVolume;
           //dispatch({type: ACTIONS.IS_PLAYING});
           //currentSound.onplaying = () => {console.log("playing")};
            currentSound.play();
            console.log("state.buttonRefIndex: " + state.buttonRefIndex);
            //dispatch({type: ACTIONS.CHANGE_TIMES_PLAYED});
            //dispatch({type: ACTIONS.IS_NOT_PLAYING});
            //on another tap
            //create useEffect?
            /* problem is that if another sound is played before prev is finished, the buttonRef index doesn't match the prev sound index and the prev button stays green. */
            //currentSound.onended = makeButtonGray();/*() => currentButton.style.backgroundColor = "gray";*/
            if (!currentSound.ended) {
                /*this will only make prevbutton gray. not previous pushed button:*/
                //instead maybe create array of active buttons in the state
                //buttonRef.current[state.buttonRefIndex-1].style.backgroundColor = "gray";
                //dispatch({type: ACTIONS.IS_PLAYING})
                //audioRef.current[i].pause();
                currentSound.currentTime = 0;
                currentSound.play();
            dispatch({type: ACTIONS.CHANGE_TIMES_PLAYED});
            //currentSound.onended = makeButtonGray();
                //dispatch({type: ACTIONS.IS_NOT_PLAYING})
            }
            else if(currentSound.ended){
                //makeButtonGray();
                //dispatch({type: ACTIONS.IS_NOT_PLAYING});
                /*currentButtonColor = "gray";
                dispatch({type: ACTIONS.CHANGE_BUTTON_COLOR, payload: currentButtonColor});
                currentButton.style.backgroundColor = state.currentButtonColor;*/
                
            }    
            //change this?
            /*else if(!useAudioRef.current[i].paused && !state.isPowerOn){
                useAudioRef.current[i].pause();
                useAudioRef.current[i].currentTime = 0;
            }*/

            //useAudioRef.current[i].play();
            //i = drumKitData.buttonList.length;
            //console.log(currentButton);
            //return currentButton;
        }
    }
    
} else if(state.isPowerOn === false){
    return null;
    }
}


useEffect(() => {
    window.addEventListener('keydown', (e)=> handleAudioKeyDown(e));
    //window.addEventListener('keydown', state.isPowerOn ? (e)=>dispatch({type: ACTIONS.TAP_KEY, payload: [e, dispatch, state]}) : null);
    
    return ()=> {window.removeEventListener('keydown', (e)=> handleAudioKeyDown(e))};
    //return () => {window.removeEventListener('keydown', state.isPowerOn ? (e)=>dispatch({type: ACTIONS.TAP_KEY, payload: [e, dispatch, state]}) : null);
//};
}, [state.isPowerOn]);
//test background color

/*function makeButtonGray(){
    if(state.buttonRefIndex >= 0 && state.buttonRefIndex < 10){
        //console.log(state.timesPlayed);
        //console.log(audioRef.current[state.buttonRefIndex].paused);
    return buttonRef.current[state.buttonRefIndex].style.backgroundColor = "gray";
    } else {
        return null;
    }
}*/
/*useEffect(() => {
    window.addEventListener("keyup", makeButtonGray);

    return ()=>{window.removeEventListener("keyup", makeButtonGray)}

}, [state.timesPlayed]);*/ /* this isn't working when the same is played multiple times or when one is played before other finishes. Maybe dispatch the IS_NOT_PLAYING or IS_PLAYING action?*/

return(

<div id="button-container">
    {drumKitData.buttonList.map((btn, index) => <button key={btn.letter} ref={(dpad)=> buttonRef.current.push(dpad)} /*style={{backgroundColor: state.currentButtonColor}}*/onClick={state.isPowerOn ? handleAudioClick  : null} /*onKeyUp={()=>console.log("keyup detected")}*/ /*onMouseUp={()=>console.log("mouseup detected")}*/ onMouseOver={state.isPowerOn ? buttonHover : null} onMouseOut={buttonExit} className="drum-pad" id={btn.letter}>{btn.letter}
        <audio ref={(ele) => audioRef.current.push(ele)} src={btn.url} preload="metadata" />
    </button>)}
</div>
)

}

export default Buttons;