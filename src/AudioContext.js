import React, { useContext, useRef } from 'react';
import { useBank, useBankUpdate, useDrumKitData } from './BankContext.js';
import { useVolume, useUpdateVolume } from './VolumeContext.js';
import { usePower, usePowerToggle } from './PowerButtonContext.js';

var audioRef;
var buttonRef;

export function useAudioRef(){
   return audioRef = useRef([]);
}
    
export function useButtonRef(){
    return buttonRef = useRef([]);
}


const ClickedAudioContext = React.createContext();
const TappedAudioContext = React.createContext();

export function useClickedAudio() {
    return useContext(ClickedAudioContext);
}
export function useTappedAudio(){
    return useContext(TappedAudioContext);
}




export default function AudioProvider({ children }){

    const kitOneIsActive = useBank();
    const toggleKit = useBankUpdate();
    const drumKitData = useDrumKitData();
    const isPowerOn = usePower();
    const togglePower = usePowerToggle();
    const currentVolume = useVolume();
    const changeVolume = useUpdateVolume();

    const handleAudioClick = (e) => {
        /*maybe memoize this and export it for volume control/cutoff w/ power shutoff?*/
        //console.log(e.target.children[0]);
        //console.log(e.target.children[0].paused);
        const clickedSound = e.target.children[0].attributes[0].nodeValue;
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
                //return audioRef.current[i] so it can be exported?
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
    }    


return(
<ClickedAudioContext.Provider value={handleAudioClick}>
    <TappedAudioContext.Provider value={handleAudioKeyDown}>

    { children }

    </TappedAudioContext.Provider>
</ClickedAudioContext.Provider>
)







}