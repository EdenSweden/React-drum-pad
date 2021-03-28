import React, { useRef } from 'react';
import './Buttons.css';

const buttons = [{letter: "Q", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}, {letter: "W", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}, {letter: "E", url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}, {letter: "A", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}, {letter: "S", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}, {letter: "D", url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}, {letter: "Z", url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}, {letter: "X", url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}, {letter: "C", url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}];


function Buttons(){


const audioRef = useRef();
//currently only plays the audio from the last url for all buttons.
const handleAudio = () => {
    audioRef.current.play();
}

return(
<div id="button-container">
    {buttons.map((btn) => <button onClick={handleAudio} className="drum-pad" id={btn.letter}>{btn.letter}<audio ref={audioRef} src={btn.url} /></button>)}
</div>
)

}

export default Buttons;