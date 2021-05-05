import React, { useEffect, useContext} from 'react';
import './Buttons.css';
import { ACTIONS, DispatchContext, GlobalStateContext, useAudioRef, useButtonRef } from './MasterContext.js';


function Buttons(){

const state = useContext(GlobalStateContext);
const dispatch = useContext(DispatchContext);
const buttonRef = useButtonRef();
const audioRef = useAudioRef();
const keyEventCodeRegex = /^(Key)[Q|W|E|A|S|D|Z|X|C]/;


    function buttonHover(e){
    
    return e.target.style.backgroundColor = "rgb(0, 230, 0)";
    
    }
    
    function buttonExit(e){
    
    return e.target.style.backgroundColor = "gray";
    }

    function handleAudioClick(e) {
    
        function clickAudio(refIndex){
            dispatch({type: ACTIONS.IS_PLAYING});
            console.log(state.isPlaying);
            audioRef.current[refIndex].play();
            //on another click
            if (!audioRef.current[refIndex].paused) { 
              audioRef.current[refIndex].currentTime = 0;
               audioRef.current[refIndex].play(); 
                }
            }
    const clickedSound = e.target.children[0].attributes[0].nodeValue;
    
    switch(clickedSound){
        case audioRef.current[0].src:
        clickAudio(0);
        break;

        case audioRef.current[1].src:
        clickAudio(1);
        break;

        case audioRef.current[2].src:
        clickAudio(2);
        break;

        case audioRef.current[3].src:
        clickAudio(3);
        break;

        case audioRef.current[4].src:
        clickAudio(4);
        break;

        case audioRef.current[5].src:
        clickAudio(5);
        break;

        case audioRef.current[6].src:
        clickAudio(6);
        break;

        case audioRef.current[7].src:
        clickAudio(7);
        break;

        case audioRef.current[8].src:
        clickAudio(8);
        break;

        default:
        return null;
    }
        /*if(clickedSound === audioRef.current[i].src){
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
        //}
        
    //dispatch({type: ACTIONS.CLICK_PAD});
}


function handleAudioKeyDown(e) {
    
    function audioTap(refIndex){
        buttonRef.current[refIndex].style.backgroundColor = "rgb(0, 230, 0)";
        audioRef.current[refIndex].play();
            //on another tap of same key
            if(!audioRef.current[refIndex].paused){
                audioRef.current[refIndex].currentTime = 0;
                audioRef.current[refIndex].play();
                }
        }

        /*may need to do useCallback or useEffect since it only knows on the first render if the power is on and doesn't update when power is toggled*/
    //if(state.isPowerOn === true) {
        if(keyEventCodeRegex.test(e.code)){
            
            switch(e.code){
                case "KeyQ":
                audioTap(0);
                break;

                case "KeyW":
                audioTap(1);
                break;

                case "KeyE":
                audioTap(2);
                break;

                case "KeyA":
                audioTap(3);
                break;

                case "KeyS":
                audioTap(4);
                break;

                case "KeyD":
                audioTap(5);
                break;

                case "KeyZ":
                audioTap(6);
                break;
                case "KeyX":
                audioTap(7);
                break;

                case "KeyC":
                audioTap(8);
                break;

                default:
                return null;
                }

            } else {
                return null;
            }
            
            /*IDEA:*///audioRef.current.filter(sound => console.log(sound.ended);
     
    /*} else if(state.isPowerOn === false){
        return null;
                }*/
    }
            
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
        //i = state.drumKitData.buttonList.length;
        /*} else if (e.keyCode !== state.drumKitData.buttonList[i].keyCode){
            i++;
        }*/
        //i = drumKitData.buttonList.length;
    

    
/*, [/*audioRef, buttonRef, dispatch, drumKitData.buttonList, /*state.buttonRefIndex, *//*state.isPowerOn]);*/
/*are all the above dependencies necessary? Only the last two seem crucial because the others shouldn't change. Make sure they don't. (unless you add useEffect for drumKitData*/

useEffect(() => {
    if(state.isPowerOn===true){
    window.addEventListener('keydown', handleAudioKeyDown);
    
    } else if(state.isPowerOn===false){
        window.removeEventListener('keydown', handleAudioKeyDown);
    }
    return ()=> {window.removeEventListener('keydown', handleAudioKeyDown)};

}, [state.isPowerOn]);

function makeButtonGray(e){
        if(keyEventCodeRegex.test(e.code)){
        switch(e.code){
            case "KeyQ":
            buttonRef.current[0].style.backgroundColor = "gray";
            break;
            case "KeyW":
            buttonRef.current[1].style.backgroundColor = "gray";
            break;
            case "KeyE":
            buttonRef.current[2].style.backgroundColor = "gray";
            break;
            case "KeyA":
            buttonRef.current[3].style.backgroundColor = "gray";
            break;
            case "KeyS":
            buttonRef.current[4].style.backgroundColor = "gray";
            break;
            case "KeyD":
            buttonRef.current[5].style.backgroundColor = "gray";
            break;
            case "KeyZ":
            buttonRef.current[6].style.backgroundColor = "gray";
            break;
            case "KeyX":
            buttonRef.current[7].style.backgroundColor = "gray";
            break;
            case "KeyC":
            buttonRef.current[8].style.backgroundColor = "gray";
            break;
            default:
            return null;
            }
        }
        /*IDEA:*///audioRef.current.filter(sound => console.log(sound.ended));

    else {
        return null;
    }
}

useEffect(() => {
    window.addEventListener("keyup", makeButtonGray);

   return ()=>{window.removeEventListener("keyup", makeButtonGray)}

});

return(

<div id="button-container">
    {state.drumKitData.buttonList.map((btn, index) => <button key={btn.letter} ref={/*(dpad)=> buttonRef.current.push(dpad)*/dpad => buttonRef.current[index] = dpad} onClick={state.isPowerOn ? handleAudioClick: null} onMouseOver={state.isPowerOn ? buttonHover : null} onMouseOut={buttonExit} className="drum-pad" id={btn.letter}>{btn.letter}
        <audio ref={/*(ele) => audioRef.current.push(ele)*/ele => audioRef.current[index] = ele} src={btn.url} preload />
    </button>)}
</div>
)

}

export default Buttons;