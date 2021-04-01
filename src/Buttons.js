import React, { useRef, useEffect } from 'react';
import './Buttons.css';

const buttons = [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}];


function Buttons(){

/*useEffect(() => {
//IT WORKS WHEN YOU ADD EVENT LISTENER
    window.addEventListener('keydown', handleAudioKeyDown);

    return () => {window.removeEventListener('keydown', handleAudioKeyDown);
};
});*/

const audioRef = useRef([]);
//currently only plays the audio from the last url for all buttons.
const handleAudioClick = (index) => {
    audioRef.current[index].play();
};
const testingKeyDown = () => {
    console.log("keydown detected");
}
/*const handleAudioKeyDown = (event, index) => {
    
    buttons.forEach(btn => {console.log(btn.keyCode)
        if(btn.keyCode === event.keyCode){
            console.log("yay!");
            audioRef.current[index].play();
        }
    });
    //buttons.forEach(btn => console.log(btn.keyCode === event.keyCode););
};*/

/*const detectKey = (event, i) => {
    if (event.keyCode === buttons[i].keyCode) {
        handleAudio();
    } 
}*/

return(
<div id="button-container" tabIndex={0} onKeyDown={testingKeyDown}>
    {buttons.map((btn, index) => <button key={btn.letter} onClick={() => handleAudioClick(index)} onKeyDown={testingKeyDown} className="drum-pad" id={btn.letter}>{btn.letter}
        <audio ref={(ele) => audioRef.current.push(ele)} src={btn.url} />
    </button>)}
</div>
)

}

export default Buttons;