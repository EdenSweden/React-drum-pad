import React, { useRef, useEffect } from 'react';
import './Buttons.css';
import { useDrumKitData } from './BankContext.js';
import { usePower } from './PowerButtonContext.js';




function Buttons(){

const isPowerOn = usePower();


useEffect(() => {

    window.addEventListener('keydown', isPowerOn ? handleAudioKeyDown : null);

    return () => {window.removeEventListener('keydown', handleAudioKeyDown);
};
});

const audioRef = useRef([]);
const buttonRef = useRef([]);
//const kitOneIsActive = useBank();
//const toggleKit = useBankUpdate();
const drumKitData = useDrumKitData();

//fix audio click

const handleAudioClick = (index) => {
    for(let i = 0; i < drumKitData.buttonList.length; i++){
        if(drumKitData.buttonList[index].url === audioRef.current[index]){
            console.log(audioRef.current[index]);
        }
    }
    //audioRef.current[index].play();
    //console.log(audioRef);

};



const handleAudioKeyDown = (e) => {
    for(let i = 0; i < drumKitData.buttonList.length; i++){
        if(e.keyCode === drumKitData.buttonList[i].keyCode){
            //console.log(audioRef.current[i]);
            buttonRef.current[i].focus();
            const currentSound = audioRef.current[i];
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

<div id="button-container">
    {drumKitData.buttonList.map((btn, index) => <button key={btn.letter} ref={(dpad)=> buttonRef.current.push(dpad)} onClick={isPowerOn ? handleAudioClick(index) : null} onKeyUp={()=>buttonRef.current[index].blur()} onMouseUp={()=>buttonRef.current[index].blur()} className="drum-pad" id={btn.letter}>{btn.letter}
        <audio ref={(ele) => audioRef.current.push(ele)} src={btn.url} preload />
    </button>)}
</div>
)

}

export default Buttons;