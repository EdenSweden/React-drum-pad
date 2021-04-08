import React, { useRef, useEffect } from 'react';
import './Buttons.css';
import { useDrumKitData } from './BankContext.js';
import { usePower } from './PowerButtonContext.js';
import { useVolume } from './VolumeContext.js';




function Buttons(){

const currentVolume = useVolume();
//const changeVolume = useUpdateVolume();

const drumKitData = useDrumKitData();

const isPowerOn = usePower();

useEffect(() => {

    window.addEventListener('keydown', isPowerOn ? handleAudioKeyDown : null);

    return () => {window.removeEventListener('keydown', handleAudioKeyDown);
};
});

const audioRef = useRef([]);
const buttonRef = useRef([]);


const handleAudioClick = (e) => {
    
    const clickedSound = e.target.children[0].attributes[0].nodeValue;
    for(let i = 0; i < drumKitData.buttonList.length; i++){
        if(clickedSound === audioRef.current[i].src){
            audioRef.current[i].volume = currentVolume;
            /*if you double click on a long audio sound, both .paused are logged as false. Otherwise it logs true then false.*/
            //console.log(audioRef.current[i].paused);
            audioRef.current[i].play();
            //on another click
            if (!audioRef.current[i].paused) {
                audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
                audioRef.current[i].play();
                
            }
            
            console.log(audioRef.current[i].duration);
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
            const playPromise = () => currentSound.play();
            if(playPromise /*&& currentSound.currentTime === currentSound.duration*/) {
                playPromise().then(()=> {
                    /*if currentSound.currentTime < currentSound.duration, make it replay if interrupted by another keyDown*/
                  if(currentSound.currentTime === currentSound.duration){  
                console.log("success");
                  }
                }
                ).catch(()=>{
                    currentSound.pause();
                    currentSound.currentTime = 0;
                    console.log("audio interrupted");
                })
            }
            //audioRef.current[i].play();
            i = drumKitData.buttonList.length;
        }
    }
}

return(

<div id="button-container" /*ref={randomRef} onClick={sleuthItOut}*/>
    {drumKitData.buttonList.map((btn, index) => <button key={btn.letter} ref={(dpad)=> buttonRef.current.push(dpad)} onClick={isPowerOn ? handleAudioClick : null} onKeyUp={()=>buttonRef.current[index].blur()} onMouseUp={()=>buttonRef.current[index].blur()} className={"drum-pad"} id={btn.letter}>{btn.letter}
        <audio ref={(ele) => audioRef.current.push(ele)} src={btn.url} preload />
    </button>)}
</div>
)

}

export default Buttons;