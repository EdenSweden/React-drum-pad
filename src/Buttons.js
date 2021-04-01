import React, { useRef, useEffect } from 'react';
import './Buttons.css';

const buttons = [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}];


function Buttons(){

useEffect(() => {
//IT WORKS WHEN YOU ADD EVENT LISTENER TO THE WINDOW
    window.addEventListener('keydown', handleAudioKeyDown);

    return () => {window.removeEventListener('keydown', handleAudioKeyDown);
};
});

/*useEffect(() => {
    window.addEventListener("keyup", unfocus);
    
    return () => {window.removeEventListener("keyup", unfocus);}
    });*/

const audioRef = useRef([]);
const buttonRef = useRef([]);
const handleAudioClick = (index) => {
    audioRef.current[index].play();
};

/*maybe use useState to toggle a state of blur vs focus or green vs gray for the button colors*/
/*or add onKeyUp event listener that does buttonRef.current[i].blur()*/

const handleAudioKeyDown = (e) => {
    for(let i = 0; i < buttons.length; i++){
        if(e.keyCode === buttons[i].keyCode){
            console.log(audioRef.current[i]);
            //const unfocus = () => {buttonRef.current[i].blur()};
            buttonRef.current[i].focus();
            audioRef.current[i].play();
            i = buttons.length;
        }
    }
}

return(
<div id="button-container">
    {buttons.map((btn, index) => <button key={btn.letter} ref={(dpad)=> buttonRef.current.push(dpad)} onClick={() => handleAudioClick(index)} onKeyUp={()=>console.log("keyUp detected")} className="drum-pad" id={btn.letter}>{btn.letter}
        <audio ref={(ele) => audioRef.current.push(ele)} src={btn.url} />
    </button>)}
</div>
)

}

export default Buttons;