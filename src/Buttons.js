import React, { useEffect, useContext, useState } from 'react';
import './Buttons.css';
import { ACTIONS, DispatchContext, GlobalStateContext, useAudioRef, useButtonRef } from './MasterContext.js';


function Buttons(){

const state = useContext(GlobalStateContext);
const dispatch = useContext(DispatchContext);
const buttonRef = useButtonRef();
const audioRef = useAudioRef();

 
const [buttonIndex, setButtonIndex] = useState([]);

function addButtonIndex(newBtnIndex){
    setButtonIndex((...prevIndex)=>[...prevIndex, newBtnIndex]);
    console.log("buttonIndex: " + buttonIndex);
    
}

    function buttonHover(e){
 
    return e.target.style.backgroundColor = "rgb(0, 230, 0)";
    
    }
    
    function buttonExit(e){
    
    return e.target.style.backgroundColor = "gray";
    }

    function handleAudioClick(e) {
    //console.log(e.target.children[0].attributes[0].nodeValue);
    //console.log(e.target.children[0]);
    //console.log(e.target.children[0].paused);
    const clickedSound = e.target.children[0].attributes[0].nodeValue;
    //console.log(clickedSound);
    for(let i = 0; i < state.drumKitData.buttonList.length; i++){
        if(clickedSound === audioRef.current[i].src){
            audioRef.current[i].volume = state.currentVolume;
            //audioRef.current[i].volume = state.currentVolume;
            //console.log("audioRef volume: " + audioRef.current[i].volume);
            //console.log("state volume: " + state.currentVolume);
            //console.log("currentVolume value: " + [...state].currentVolume);
            //console.log("volume: "+ audioRef.current[i].volume);
            //dispatch({type: ACTIONS.IS_PLAYING});
            audioRef.current[i].play();
            //audioRef.current[i].play();
            //dispatch({type: ACTIONS.IS_NOT_PLAYING});
            //on another click
            if (/*!audioRef.current[i]*/!audioRef.current[i].paused) {
              //dispatch({type: ACTIONS.IS_PLAYING}); 
              audioRef.current[i].currentTime = 0;
              //audioRef.current[i].currentTime = 0;
               audioRef.current[i].play(); 
              //audioRef.current[i].play();
            }

            /*else if (audioRef.current[i].paused) {
                dispatch({type: ACTIONS.IS_NOT_PLAYING})
            }*/

            /*if(state.isPowerOn === false){
                audioRef.current[i].pause();
                //audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
                //audioRef.current[i].currentTime = 0;
                //dispatch({type: ACTIONS.IS_NOT_PLAYING});
            }*/
        }
        
    }
    //dispatch({type: ACTIONS.CLICK_PAD});
};

function handleAudioKeyDown /*= useCallback(*/(e) /*=>*/ {
    //the problem is, it might not change the timesPlayed if the prev sound isn't done playing.
    if(state.isPowerOn === true) {
        let i = 0;
        while(i < state.drumKitData.buttonList.length){


        /*function removeButtonIndex(){
            /*use filter method to make the bg-color green for all button indices that are in the array on keyup, and then empty the array*/
            //setButtonIndex([]);
        //}
        
        //console.log(buttonRef.current[i].style.backgroundColor);
        if(e.keyCode === state.drumKitData.buttonList[i].keyCode){
            let currentButton = buttonRef.current[i];
            
            //console.log("i: " + i);
            //addButtonIndex(i);
            
            
            currentButton.style.backgroundColor = 'rgb(0, 230, 0)';
            //console.log(buttonRef.current[i]);
            let currentSound = audioRef.current[i];
            //let currentSound = audioRef.current[i];
            //currentSound.volume = state.currentVolume;
            //console.log(currentSound.volume);
            //console.log("buttonIndices: " + [...buttonIndices]);
            currentSound.play();
            dispatch({type: ACTIONS.CHANGE_TIMES_PLAYED});
            
            /* problem is that if another sound is played before prev is finished, the buttonRef index doesn't match the prev sound index and the prev button stays green. */
            //currentSound.onended = makeButtonGray();/*() => currentButton.style.backgroundColor = "gray";*/
            //breaks from loop
            //i = state.drumKitData.buttonList.length;
            //on another tap
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
            //buttonRef.current[buttonIndex].style.backgroundColor = 'gray';
            //setButtonIndex([]);
        i = state.drumKitData.buttonList.length;
        } else if (e.keyCode !== state.drumKitData.buttonList[i].keyCode){
            i++;
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
    
    
    return ()=> {window.removeEventListener('keydown', (e)=> handleAudioKeyDown(e))};

}, [state.isPowerOn, buttonIndex]);

/*function makeButtonGray(e){
    /*if(buttonRef.current[buttonIndex] >= 0 && buttonRef.current[buttonIndex] < 10){*/
        //console.log("buttonRef.current.length: " + buttonRef.current.length);
        /*console.log("buttonRef.current: " + buttonRef.current);
        console.log("buttonRef.current[0]:");
        console.dir(buttonRef.current[0]); */
        //console.log("audioRef.current.length: " + audioRef.current.length);
        //console.log("audioRef.current[0]:");
        //console.dir(audioRef.current[0]);
        //console.log("src: " + audioRef.current[0].src)
        //console.log("buttonRef.current: " + buttonRef.current[0][0]);
        /*IDEA:*///audioRef.current.filter(sound => console.log(sound.ended));

    //return buttonRef.current[buttonIndex].style.backgroundColor = "gray";
    /*} else {
        return null;
    }*/
//}

useEffect(() => {
    window.addEventListener("keyup", (e)=>console.log("e.keyCode: " + e.keyCode));

   return ()=>{window.removeEventListener("keyup", (e)=>console.log("e.keyCode: " + e.keyCode))}

}, [state.timesPlayed/*, buttonIndices*/]);

/*useEffect((index)=>{

    state.drumKitData.buttonList.forEach((dpad)=>buttonRef.current.push(dpad[index]));

}, []);*/

//doesn't change the audioRef urls when the bank is switched. Fix this
/*function pushAudioRef(){
    state.drumKitData.buttonList.forEach((ele)=>audioRef.current.push(ele));
}*/

//NOT NEEDED: creates array of audioRef links, re-running when the active kit is switched
/*useEffect(()=>{
    
    state.drumKitData.buttonList.forEach((ele)=>audioRef.current.push(ele.url));
    return () => {
        audioRef = [];}
    }, [state.kitOneIsActive, state.drumKitData]);*/

return(

<div id="button-container">
    {state.drumKitData.buttonList.map((btn, index) => <button key={btn.letter} ref={/*(dpad)=> buttonRef.current.push(dpad)*/dpad => buttonRef.current[index] = dpad} onClick={state.isPowerOn ? handleAudioClick  : null} onMouseOver={state.isPowerOn ? buttonHover : null} onMouseOut={buttonExit} className="drum-pad" id={btn.letter}>{btn.letter}
        <audio ref={/*(ele) => audioRef.current.push(ele)*/ele => audioRef.current[index] = ele} src={btn.url} preload="metadata" />
    </button>)}
</div>
)

}

export default Buttons;