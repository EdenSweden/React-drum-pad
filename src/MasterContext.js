import React, { useContext, useState, useRef, useReducer } from 'react';


/*SOLUTION: manage global state with useReducer. Then store the reducer function in two contexts: one for state and one for dispatch. Pass only the context that is necessary to each component. */


export const GlobalStateContext = React.createContext();
export const DispatchContext = React.createContext();
export const DrumKitDataContext = React.createContext();

export const ACTIONS = {
    TOGGLE_POWER: "togglePower",
    CHANGE_VOLUME: "changeVolume",
    TOGGLE_BANK: "toggleBank",
    TAP_KEY: "tapKey",
    CLICK_PAD: "clickPad",
    IS_PLAYING: "isPlaying",
    IS_NOT_PLAYING: "isNotPlaying"
}

//custom hooks to export refs to Buttons & other components
var audioRef;
export function useAudioRef(){
    audioRef = useRef([]);
    return audioRef;
}

var buttonRef;
export function useButtonRef(){
    buttonRef = useRef([]);
    return buttonRef;
}


export default function MasterProvider( { children } ){
    
/*syntax: const [state,dispatch] = useReducer(reducerFunction, initialStateValue)*/
const [state, dispatch] = useReducer(reducer, {isPowerOn: true, currentVolume: 0.5, kitOneIsActive: true, isPlaying: false});

//const { state } = currentState;

/*this is an impure function because it depends on state but may cause unnecessary re-renders...? Use useEffect() somewhere instead and only re-render when state.kitOneIsActive changes?*/

    //const or var?
    var drumKitData = { displayText: state.kitOneIsActive ? "Heater Kit" : "Smooth Piano Kit", buttonList: state.kitOneIsActive ? [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}] : [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}]};


function reducer(state, action){

    switch(action.type) {
        /*the state gets added to, and it says 'true' 'false' 'true' over and over. But state shouldn't be mutated? Do research*/
        case ACTIONS.TOGGLE_POWER:
        return {...state, isPowerOn: !state.isPowerOn, isPlaying: false }
        case ACTIONS.CHANGE_VOLUME:
        return {...state, currentVolume: action.payload}
        case ACTIONS.TOGGLE_BANK:
        return {...state, kitOneIsActive: !state.kitOneIsActive}
        case ACTIONS.TAP_KEY:
        //handleAudioKeyDown(action.payload);
        return {...state, isPlaying: false}//should set isPlaying to false AFTER playing is complete.
        case ACTIONS.CLICK_PAD:
        //getDrumKitData();
        //handleAudioClick(action.payload);
        return {...state/*, isPlaying: false*/}/*should set isPlaying to false AFTER playing is complete. Does this cause the promise to be interrupted?*/
        case ACTIONS.IS_PLAYING:
            return {...state, isPlaying: true}
        case ACTIONS.IS_NOT_PLAYING:
            return {...state, isPlaying: false}
        default:
        return state;
    }
}




//var currentButton;
/*may need to add this function to the component as useEffect (or create custom hook to export), and add state.isPlaying as a dependency, so you can pause and change the volume mid-play and have it respond &/or re-render.*/
/*function handleAudioKeyDown([e, dispatch,...state]) {
    /*console.log(state);
    console.log(...state);
    console.log({...state}.isPowerOn);*/
    //console.log(state.isPowerOn);
    /*for(let i = 0; i < drumKitData.buttonList.length; i++){
        if(e.keyCode === drumKitData.buttonList[i].keyCode){
            currentButton = buttonRef.current[i];
            //console.log(buttonRef.current[i]);
            buttonRef.current[i].style.backgroundColor = 'rgb(0, 230, 0)';
            const currentSound = audioRef.current[i];
            //currentSound.volume = currentVolume;
           dispatch({type: ACTIONS.IS_PLAYING});
            currentSound.play();
            dispatch({type: ACTIONS.IS_NOT_PLAYING});
            //on another tap
            if (!audioRef.current[i].paused) {
                dispatch({type: ACTIONS.IS_PLAYING})
                //audioRef.current[i].pause();
                audioRef.current[i].currentTime = 0;
                audioRef.current[i].play();
                dispatch({type: ACTIONS.IS_NOT_PLAYING})
            }
            else if(audioRef.current[i].paused){
                dispatch({type: ACTIONS.IS_NOT_PLAYING});
            }
            //may need to use useEffect on the component so this doesn't cause issues
            /*window.addEventListener("keyup", ()=>buttonRef.current[i].style.backgroundColor = "gray");
            return window.removeEventListener("keyup", ()=>buttonRef.current[i].style.backgroundColor = "gray");*/
            
            
            //change this?
            /*else if(!useAudioRef.current[i].paused && !state.isPowerOn){
                useAudioRef.current[i].pause();
                useAudioRef.current[i].currentTime = 0;
            }*/

            //useAudioRef.current[i].play();
            //i = drumKitData.buttonList.length;
            //return currentButton;
        //}
    //}*/
    
//}

return(

        <GlobalStateContext.Provider value={{state}}>
            <DispatchContext.Provider value={dispatch}>
                <DrumKitDataContext.Provider value={drumKitData}>
                {children}
                </DrumKitDataContext.Provider>
            </DispatchContext.Provider>
        </GlobalStateContext.Provider>
);

}


