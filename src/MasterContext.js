import React, { useRef, useReducer } from 'react';

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
    IS_NOT_PLAYING: "isNotPlaying",
    CHANGE_BUTTON_INDEX: "changeButtonIndex",
    CHANGE_TIMES_PLAYED: "changeTimesPlayed",
    //CHANGE_ACTIVE_BUTTONS: "changeActiveButtons"
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

const [state, dispatch] = useReducer(reducer, {isPowerOn: true, currentVolume: 0.5, kitOneIsActive: true, isPlaying: false, buttonRefIndex: undefined, timesPlayed: 0 /*activeButtons: []*/});


/*this is an impure function because it depends on state but may cause unnecessary re-renders...? Use useEffect() somewhere instead and only re-render when state.kitOneIsActive changes?*/


    const drumKitData = { displayText: state.kitOneIsActive ? "Heater Kit" : "Smooth Piano Kit", buttonList: state.kitOneIsActive ? [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}] : [{letter: "Q", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}, {letter: "W", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"}, {letter: "E", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"}, {letter: "A", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"}, {letter: "S", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"}, {letter: "D", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"}, {letter: "Z", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"}, {letter: "X", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"}, {letter: "C", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}]};


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
        return {...state, isPlaying: false}//should set isPlaying to false AFTER playing is complete.
        
        case ACTIONS.CLICK_PAD:
        //handleAudioClick(action.payload);
        return {...state/*, isPlaying: false*/}/*should set isPlaying to false AFTER playing is complete. Does this cause the promise to be interrupted?*/
        
        /*case ACTIONS.IS_PLAYING:
            return {...state, isPlaying: true}*/
        
        /*case ACTIONS.IS_NOT_PLAYING:
            return {...state, isPlaying: false}*/
        //can put multiple indices for multiple audio clips playing at once
        case ACTIONS.CHANGE_BUTTON_INDEX:
            return {...state, buttonRefIndex: /*...indices,*/action.payload}

        case ACTIONS.CHANGE_TIMES_PLAYED:
            /*this is simply an action to use as a dependency for the useEffect makeButtonGray function in Buttons.js. BUT it seems to increment by 2. May need to debug or write console.log somewhere else*/
            return {...state, timesPlayed: state.timesPlayed + 1}

        /*case ACTIONS.CHANGE_ACTIVE_BUTTONS:
            return {...state, activeButtons: [...action.payload]}*/

        default:
        return state;
    }
}


return(

        <GlobalStateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <DrumKitDataContext.Provider value={drumKitData}>
                {children}
                </DrumKitDataContext.Provider>
            </DispatchContext.Provider>
        </GlobalStateContext.Provider>
);

}


