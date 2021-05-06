import React, { useEffect, useContext} from 'react';
import './Buttons.css';
import { ACTIONS, DispatchContext, GlobalStateContext, useAudioRef, useButtonRef } from './MasterContext.js';

/*sfind way to export audioRef.current from here to volume & power, or to have it sent here and everywhere else from MasterContext*/


function Buttons(){

const state = useContext(GlobalStateContext);
const dispatch = useContext(DispatchContext);
const buttonRef = useButtonRef();
const audioRef = useAudioRef();
const keyEventCodeRegex = /^(Key)[Q|W|E|A|S|D|Z|X|C]/;


//custom hook to handle power switchoff during playback

/*function usePowerEffect(refIndex){
    return useEffect(()=> {
            if(state.isPowerOn === false){
                audioRef.current[refIndex].pause();
                audioRef.current[refIndex].currentTime = 0;
            } else {
                return null;
            }
    }, [state.isPowerOn]);

}*/



    function buttonHover(e){
    
    return e.target.style.backgroundColor = "rgb(0, 230, 0)";
    
    }
    
    function buttonExit(e){
    
    return e.target.style.backgroundColor = "gray";
    }

    //will make the sound shut off if power shuts off
    useEffect(()=>{
        if (state.isPowerOn === false){
            function stopSound(audio){
                audio.pause();
                audio.currentTime = 0;
            }
            var activeAudio = audioRef.current.filter((audio)=>audio.ended === false);
        activeAudio.forEach((audio)=>stopSound(audio));
        } else {
            return null;
        }
        return () => {activeAudio = []}

    }, [state.isPowerOn]);

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
            
    }
            

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
        <audio ref={/*(ele) => audioRef.current.push(ele)*/ele => audioRef.current[index] = ele} src={btn.url} preload="true" />
    </button>)}
</div>
)

}

export default Buttons;