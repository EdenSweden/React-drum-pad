import React, { useRef, useEffect, useState } from 'react';
import './Buttons.css';
import BankDataProvider, { useBank, useBankUpdate, useDrumKitData} from './BankContext.js';
import { usePower, usePowerToggle } from './PowerButtonContext.js';


const isPowerOn = usePower();
const togglePower = usePowerToggle();


function Buttons(){


useEffect(() => {

    window.addEventListener('keydown', handleAudioKeyDown);

    return () => {window.removeEventListener('keydown', handleAudioKeyDown);
};
});

const audioRef = useRef([]);
const buttonRef = useRef([]);
const kitOneIsActive = useBank();
const toggleKit = useBankUpdate();
const drumKitData = useDrumKitData();

const handleAudioClick = (index) => {
    audioRef.current[index].play();
};



const handleAudioKeyDown = (e) => {
    for(let i = 0; i < drumKitData.buttonList.length; i++){
        if(e.keyCode === drumKitData.buttonList[i].keyCode){
            console.log(audioRef.current[i]);
            buttonRef.current[i].focus();
            audioRef.current[i].play();
            i = drumKitData.buttonList.length;
        }
    }
}

return(

<div id="button-container">
    {drumKitData.buttonList.map((btn, index) => <button key={btn.letter} ref={(dpad)=> buttonRef.current.push(dpad)} onClick={() => handleAudioClick(index)} onKeyUp={()=>buttonRef.current[index].blur()} onMouseUp={()=>buttonRef.current[index].blur()} className="drum-pad" id={btn.letter}>{btn.letter}
        <audio ref={(ele) => audioRef.current.push(ele)} src={btn.url} />
    </button>)}
</div>
)

}

export default Buttons;