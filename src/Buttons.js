import React, { useRef, useEffect, useState } from 'react';
import './Buttons.css';
import BankDataProvider, { useBank, useBankUpdate, useDrumKitData/*kitOne, kitTwo*/ } from './BankContext.js';

/*const kitOne = [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}];*/

/*const kitTwo = [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}];*/




function Buttons(){

    //const [currentBank, setCurrentBank] = useState(kitOne);
    //this if else statement causes an infinite loop. Make it only render if necessary.
    /*if (currentBankData.soundList === "kitOne") {
        setCurrentBank(kitOne);
    } else if (currentBankData.soundList === "kitTwo") {
        setCurrentBank(kitTwo);
    }*/


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