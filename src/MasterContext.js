import React, { useContext, useState, useRef, useReducer } from 'react';


/*SOLUTION: manage global state with useReducer. Then store the reducer function in two contexts: one for state and one for dispatch. Pass only the context that is necessary to each component. */

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

export const GlobalStateContext = React.createContext();
export const DispatchContext = React.createContext();
//export const IsPlayingContext = React.createContext();
//export const ToggleIsPlayingContext = React.createContext();

/*function useIsPlaying(){
    return useContext(IsPlayingContext);
}
function useToggleIsPlaying(){
    return useContext(ToggleIsPlayingContext);
}*/



export const ACTIONS = {
    TOGGLE_POWER: "togglePower",
    CHANGE_VOLUME: "changeVolume",
    TOGGLE_BANK: "toggleBank",
    TAP_KEY: "tapKey",
    CLICK_PAD: "clickPad",
    IS_PLAYING: "isPlaying",
    IS_NOT_PLAYING: "isNotPlaying"
}

//custom hooks to export refs to Buttons component
export function useAudioRef(){
    const audioRef = useRef([]);
    return audioRef;
}

export function useButtonRef(){
    const buttonRef = useRef([]);
    return buttonRef;
}



//is the ...state destructuring necessary in the reducer function? yes, to prevent mutation.
function reducer(state, action){
    switch(action.type) {
        case ACTIONS.TOGGLE_POWER:
        return {...state, isPowerOn: !state.isPowerOn, isPlaying: false }
        case ACTIONS.CHANGE_VOLUME:
        return {...state, currentVolume: changeVolume()} //may need to test this
        case ACTIONS.TOGGLE_BANK:
        return {...state, kitOneIsActive: !state.kitOneIsActive}
        case ACTIONS.TAP_KEY:
        handleAudioKeyDown();
        return {...state, isPlaying: false}//should set isPlaying to false AFTER playing is complete.
        case ACTIONS.CLICK_PAD:
        handleAudioClick();
        return {...state, isPlaying: false}//should set isPlaying to false AFTER playing is complete.
        case ACTIONS.IS_PLAYING:
            return {...state, isPlaying: true}
        case ACTIONS.IS_NOT_PLAYING:
            return {...state, isPlaying: false}
        default:
        return state;
    }
}




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

const [state, dispatch] = useReducer(reducer, {isPowerOn: true, currentVolume: 0.5, kitOneIsActive: true, isPlaying: false, drumKitData: drumKitData });

function handleAudioClick(e) {
    //console.log(e.target.children[0]);
    //console.log(e.target.children[0].paused);
    const clickedSound = e.target.children[0].attributes[0].nodeValue;
    for(let i = 0; i < drumKitData.buttonList.length; i++){
        if(clickedSound === useAudioRef.current[i].src){
            //This is where your bug is:
            //audioRef.current[i].volume = currentVolume;
            console.log("currentVolume value: " + GlobalStateContext.state.currentVolume);
            /*currentVolume above is undefined because AudioContext is the parent of VolumeContext. Maybe make a single context file with all everything?*/
            console.log("volume: "+ useAudioRef.current[i].volume);
            DispatchContext.dispatch({type: ACTIONS.IS_PLAYING});
            useAudioRef.current[i].play();
            DispatchContext.dispatch({type: ACTIONS.IS_NOT_PLAYING});
            //on another click
            if (!useAudioRef.current[i].paused) {
              DispatchContext.dispatch({type: ACTIONS.IS_PLAYING}); 
              useAudioRef.current[i].currentTime = 0;
                useAudioRef.current[i].play();
            }

            else if (useAudioRef.current[i].paused) {
                DispatchContext.dispatch({type: ACTIONS.IS_NOT_PLAYING})
            }
            if(!GlobalStateContext.state.isPowerOn){
                useAudioRef.current[i].pause();
                useAudioRef.current[i].currentTime = 0;
                DispatchContext.dispatch({type: ACTIONS.IS_NOT_PLAYING});
            }
        }
        
    }
};

function handleAudioKeyDown(e) {
    for(let i = 0; i < drumKitData.buttonList.length; i++){
        if(e.keyCode === drumKitData.buttonList[i].keyCode){
            useButtonRef.current[i].style.backgroundColor = 'rgb(0, 230, 0)';
            const currentSound = useAudioRef.current[i];
            //currentSound.volume = currentVolume;
            DispatchContext.dispatch({type: ACTIONS.IS_PLAYING});
            currentSound.play();
            DispatchContext.dispatch({type: ACTIONS.IS_NOT_PLAYING});
            //on another tap
            if (!useAudioRef.current[i].paused) {
                DispatchContext.dispatch({type: ACTIONS.IS_PLAYING})
                //audioRef.current[i].pause();
                useAudioRef.current[i].currentTime = 0;
                useAudioRef.current[i].play();
                DispatchContext.dispatch({type: ACTIONS.IS_NOT_PLAYING})
            }
            else if(useAudioRef.current[i].paused){
                DispatchContext.dispatch({type: ACTIONS.IS_NOT_PLAYING});
            }
            window.addEventListener("keyup", ()=>useButtonRef.current[i].style.backgroundColor = "gray");
            return window.removeEventListener("keyup", ()=>useButtonRef.current[i].style.backgroundColor = "gray");
            
            
            //change this?
            /*else if(!audioRef.current[i].paused && !isPowerOn){
                audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
            }*/

            //audioRef.current[i].play();
            //i = drumKitData.buttonList.length;
        }
    }
    
}

function changeVolume(e) {
    console.log(e.target.value / 100);
    return e.target.value / 100;
    //if volume is adjusted while sound is playing:
    /*if (GlobalStateContext.state.isPlaying) {    
    setCurrentVolume(e.target.value / 100);
    }*/
};

const drumKitData = { displayText: state.kitOneIsActive ? "Heater Kit" : "Smooth Piano Kit", buttonList: state.kitOneIsActive ? [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}] : [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}] };
//add key and click event handler functions. Payload for both: drumKitData. May also require kitOneIsActive as payload? But maybe not.
//payload is like the parameter needed to complete a function


/*previous value attempted: {Bank: [kitOneIsActive, setOtherKitActive], BankUpdate: toggleKit,  Power: [isPowerOn, setPower], SwitchPower: togglePower, Playing: [isPlaying, toggleIsPlaying], UpdatePlaying: togglePlaying,  Volume: [currentVolume, setCurrentVolume], UpdateVolume: changeVolume, DrumKitData: drumKitData }*/

return(
/*<IsPlayingContext.Provider value={isPlaying}>
    <ToggleIsPlayingContext.Provider value={toggleIsPlaying}>  */ 
        <GlobalStateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </GlobalStateContext.Provider>
    /*</ToggleIsPlayingContext.Provider>
</IsPlayingContext.Provider>*/
);

}


