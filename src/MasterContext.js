import React,  { useContext, useState, useReducer } from 'react';


/*SOLUTION: manage global state with useReducer. Then store the reducer function in two contexts: one for state and onefor dispatch. Pass only the context that is necessary to each component. */

// Context data to use:
//BANK CONTEXT:

//const [kitOneIsActive, setOtherKitActive] = useState(true);
//BankUpdateContext:
/*function toggleKit () {

    setOtherKitActive(prevKit => !prevKit);
    //console.log(drumKitData.buttonList[0].url);
}/*
//DrumKitDataContext:

    

//POWER BUTTON CONTEXT:

//const [isPowerOn, setPower] = useState(true);

//powerToggleContext:    
export function togglePower(){

    setPower(!isPowerOn);
    
}

//AUDIO CONTEXT:

//const [isPlaying, toggleIsPlaying] = useState(false);

//and more from audio context

//VOLUME CONTEXT:
//const [ currentVolume, setCurrentVolume ] = useState(0.5);

export function changeVolume(e) {
    setCurrentVolume(e.target.value / 100);
    console.log(currentVolume);
    //if volume is adjusted while sound is playing:
    /*if (!audioRef.current[i].paused) {    
    setCurrentVolume(e.target.value / 100);
    }
};*/

/*syntax: const [state,dispatch] = useReducer(reducerFunction, initialStateValue)*/

const ACTIONS = {
    TOGGLE_POWER: "togglePower",
    CHANGE_VOLUME: "changeVolume",
    TOGGLE_BANK: "toggleBank",
    TAP_KEY: "tapKey",
    CLICK_PAD: "clickPad"
}
//is the ...state destructuring necessary in the reducer function?
function reducer(state, action){
    switch(action.type) {
        case TOGGLE_POWER:
        return {...state, isPowerOn: !isPowerOn, isPlaying: false }
        case CHANGE_VOLUME:
        return {...state, currentVolume: currentVolume} //may need to test this
        case TOGGLE_BANK:
        return {...state, kitOneIsActive: !kitOneIsActive}
        /*case TAP-KEY:
        return the function for tapping key
        case CLICK-PAD:
        return the function for clicking on drumpad*/
        default:
        return state;
    }
}

export const GlobalStateContext = React.createContext();
export const DispatchContext = React.createContext();

//export const MasterContext = React.createContext();

/*const ContextObject = () => { BankContext = [kitOneIsActive, setOtherKitActive] = useState(true), DrumKitDataContext: drumKitData, PowerButtonContext: [isPowerOn, setPower] = useState(true), AudioContext: [isPlaying, toggleIsPlaying] = useState(false), VolumeContext: [currentVolume, setCurrentVolume] = useState(0.5) }*/

/*export function useMasterContext() {
/*return { Bank, BankUpdate, Power, SwitchPower, Playing, UpdatePlaying, Volume, UpdateVolume, DrumKitData } = useContext(MasterContext);*/
/*return useContext(MasterContext);
}*/

export default function MasterProvider( { children } ){

//for the bank switch
/*const [kitOneIsActive, setOtherKitActive] = useState(true);
function toggleKit () {

    setOtherKitActive(prevKit => !prevKit);
    //console.log(drumKitData.buttonList[0].url);
}
//for the power button
const [isPowerOn, setPower] = useState(true);

function togglePower(){
    setPower(!isPowerOn);
    
}
//for the audio--volume changes, etc.
const [isPlaying, toggleIsPlaying] = useState(false);

function togglePlaying(){
    toggleIsPlaying(!isPlaying);
}
//for the volume control
const [currentVolume, setCurrentVolume] = useState(0.5);

function changeVolume(e){
    setCurrentVolume(e.target.value / 100);
}*/

const [state, dispatch] = useReducer(reducer, {isPowerOn: true, currentVolume: 0.5, kitOneIsActive: true, isPlaying: false });

/*these functions below may be redundant, as they are declared in the reducer function and are called on the event listeners in components.*/
//keep these functions here or migrate them to files of corresponding components?
/*do I declare payload here, or when calling dispatch on the TOGGLE_POWER action, or both?*/
function handleTogglePower(){
    dispatch({type: ACTIONS.TOGGLE_POWER, payload: state.isPowerOn})
}

function handleVolumeChange(){
    dispatch({type: ACTIONS.CHANGE_VOLUME})
}

function handleToggleBank(){
    dispatch({type: ACTIONS.TOGGLE_BANK})
}
//add key and click event handler functions. Payload for both: drumKitData. May also require kitOneIsActive as payload? But probably not.
//payload is like the parameter needed to complete a function
const drumKitData = { displayText: kitOneIsActive ? "Heater Kit" : "Smooth Piano Kit", buttonList: kitOneIsActive ? [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}] : [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}] };

/*previous value attempted: {Bank: [kitOneIsActive, setOtherKitActive], BankUpdate: toggleKit,  Power: [isPowerOn, setPower], SwitchPower: togglePower, Playing: [isPlaying, toggleIsPlaying], UpdatePlaying: togglePlaying,  Volume: [currentVolume, setCurrentVolume], UpdateVolume: changeVolume, DrumKitData: drumKitData }*/

return(
<GlobalStateContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>
{children}
    </DispatchContext.Provider>
</GlobalStateContext.Provider>
);

}


