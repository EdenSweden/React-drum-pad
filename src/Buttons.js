import React, { useRef, useEffect, useState, useContext } from 'react';
import './Buttons.css';
//import { useDrumKitData } from './BankContext.js';
//import { usePower } from './PowerButtonContext.js';
//import { useVolume } from './VolumeContext.js';
//import { useClickedAudio, useTappedAudio, useAudioRef, useButtonRef } from './AudioContext.js';
import Volume from './Volume.js';
import MasterProvider from './MasterContext.js';


function Buttons(){

const audioRef = useRef([]);
const buttonRef = useRef([]);  

/*const { Power, Playing, UpdatePlaying, Volume, UpdateVolume, DrumKitData } = useMasterContext({});*/
/*const {drumKitData, currentVolume, toggleIsPlaying, isPowerOn} = useMasterContext({});*/
/*const [isPowerOn, setPower] = Power;
const [isPlaying, toggleIsPlaying] = Playing;
const togglePlaying = UpdatePlaying;
const [currentVolume, setCurrentVolume] = Volume;
const changeVolume = UpdateVolume;
const drumKitData = DrumKitData;*/
//access the audio files and buttons from AudioContext.js //CHANGE THIS
//const audioRef = useAudioRef();
//const buttonRef = useButtonRef();

const handleAudioClick = (e) => {
    //console.log(e.target.children[0]);
    //console.log(e.target.children[0].paused);
    const clickedSound = e.target.children[0].attributes[0].nodeValue;
    for(let i = 0; i < drumKitData.buttonList.length; i++){
        if(clickedSound === audioRef.current[i].src){
            //This is where your bug is:
            //audioRef.current[i].volume = currentVolume;
            console.log("currentVolume value: " + currentVolume);
            /*currentVolume above is undefined because AudioContext is the parent of VolumeContext. Maybe make a single context file with all everything?*/
            console.log("volume: "+ audioRef.current[i].volume);
            audioRef.current[i].play();
            toggleIsPlaying(true);
            //console.log(isPlaying);
            //on another click
            if (!audioRef.current[i].paused) {
              toggleIsPlaying(true);
              //console.log(isPlaying);  
              audioRef.current[i].currentTime = 0;
                audioRef.current[i].play();
            }

            else if (audioRef.current[i].paused) {
                toggleIsPlaying(false);
                //console.log(isPlaying);
            }
            /*if(!isPowerOn){
                audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
            }*/
            //console.log(audioRef.current[i]);
            //return audioRef.current[i] so it can be exported?
        }
        
    }
};

const handleAudioKeyDown = (e) => {
    for(let i = 0; i < drumKitData.buttonList.length; i++){
        if(e.keyCode === drumKitData.buttonList[i].keyCode){
            buttonRef.current[i].style.backgroundColor = 'rgb(0, 230, 0)';
            const currentSound = audioRef.current[i];
            //currentSound.volume = currentVolume;
            currentSound.play();
            //on another tap
            if (!audioRef.current[i].paused) {
                toggleIsPlaying(true);
                //audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
                audioRef.current[i].play();
            }
            else if(audioRef.current[i].paused){
                toggleIsPlaying(false);
            }
            window.addEventListener("keyup", ()=>buttonRef.current[i].style.backgroundColor = "gray");
            return window.removeEventListener("keyup", ()=>buttonRef.current[i].style.backgroundColor = "gray");
            
            
            //change this?
            /*else if(!audioRef.current[i].paused && !isPowerOn){
                audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
            }*/

            //audioRef.current[i].play();
            //i = drumKitData.buttonList.length;
        }
    }
    
}    


//access audio click/keydown functions from AudioContext.js //CHANGE THIS
//const handleAudioClick = useClickedAudio();
//const handleAudioKeyDown = useTappedAudio();

//const currentVolume = useVolume();
//const changeVolume = useUpdateVolume();

//const drumKitData = useDrumKitData();

//const isPowerOn = usePower();

function buttonHover(e){
    
    return e.target.style.backgroundColor = "rgb(0, 230, 0)";
}
//this makes it permanently stay gray, even after keydown again. Fix this
function buttonExit(e){
    return e.target.style.backgroundColor = "gray";
}

useEffect(() => {

    window.addEventListener('keydown', isPowerOn ? handleAudioKeyDown : null);

    return () => {window.removeEventListener('keydown', handleAudioKeyDown);
};
});

/*const audioRef = useRef([]);
const buttonRef = useRef([]);*/


/*const handleAudioClick = (e) => {
    /*maybe memoize this and export it for volume control/cutoff w/ power shutoff?*/
    //console.log(e.target.children[0]);
    //console.log(e.target.children[0].paused);
    /*const clickedSound = e.target.children[0].attributes[0].nodeValue;
    for(let i = 0; i < drumKitData.buttonList.length; i++){
        if(clickedSound === audioRef.current[i].src){
            //audioRef.current[i].volume = currentVolume;
            audioRef.current[i].play();
            //on another click
            if (!audioRef.current[i].paused) {
              audioRef.current[i].currentTime = 0;
                audioRef.current[i].play();
            }
            if(!isPowerOn){
                audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
            }
            console.log(audioRef.current[i]);
        }
    }
};

const handleAudioKeyDown = (e) => {
    for(let i = 0; i < drumKitData.buttonList.length; i++){
        if(e.keyCode === drumKitData.buttonList[i].keyCode){
            //console.log(audioRef.current[i]);
            buttonRef.current[i].focus();
            const currentSound = audioRef.current[i];
            currentSound.volume = currentVolume;
            currentSound.play();
            //on another tap
            if (!audioRef.current[i].paused && isPowerOn) {
                //audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
                audioRef.current[i].play();
            }
            //change this?
            else if(!audioRef.current[i].paused && !isPowerOn){
                audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
            }

            //audioRef.current[i].play();
            //i = drumKitData.buttonList.length;
        }
    }
}*/
//get the i out of the keydown function and put it here
/*
function handleKeyUp(){
    buttonRef.current[i].style.backgroundColor = "gray";
}*/

return(

<div id="button-container">
    {drumKitData.buttonList.map((btn, index) => <button key={btn.letter} ref={(dpad)=> buttonRef.current.push(dpad)} onClick={isPowerOn ? handleAudioClick : null} onKeyUp={()=>buttonRef.current[index].blur()} onMouseUp={()=>buttonRef.current[index].blur()} onMouseOver={isPowerOn ? buttonHover : null} onMouseOut={buttonExit} className="drum-pad" id={btn.letter}>{btn.letter}
        <audio ref={(ele) => audioRef.current.push(ele)} src={btn.url} preload="metadata" />
    </button>)}
</div>
)

}

export default Buttons;