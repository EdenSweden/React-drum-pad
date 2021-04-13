import React,  { useContext, useState } from 'react';

//use all contexts here and create one master parent context provider with an object value with multiple items.

/* Context data to use:
//BANK CONTEXT:

const [kitOneIsActive, setOtherKitActive] = useState(true);


//BankUpdateContext:
function toggleKit () {

    setOtherKitActive(prevKit => !prevKit);
    //console.log(drumKitData.buttonList[0].url);
}
//DrumKitDataContext:

const drumKitData = { displayText: kitOneIsActive ? "Heater Kit" : "Smooth Piano Kit", buttonList: kitOneIsActive ? [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}] : [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}] };    

//POWER BUTTON CONTEXT:

const [isPowerOn, setPower] = useState(true);

//powerToggleContext:    
function togglePower(){

    setPower(!isPowerOn);
    
}

//AUDIO CONTEXT:

const [isPlaying, toggleIsPlaying] = useState(false);

//and more from audio context

//VOLUME CONTEXT:
const [ currentVolume, setCurrentVolume ] = useState(0.5);

function changeVolume(e) {
    setCurrentVolume(e.target.value / 100);
    console.log(currentVolume);
    //if volume is adjusted while sound is playing:
    /*if (!audioRef.current[i].paused) {    
    setCurrentVolume(e.target.value / 100);
    }
};*/


const MasterContext = React.createContext();

export default function MasterContextProvider( { children } ){


return(
<MasterContext.Provider value={null}>

{children}

</MasterContext.Provider>
)

}


