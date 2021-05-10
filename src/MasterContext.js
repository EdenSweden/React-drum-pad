import React, { useRef, useReducer } from 'react';

export const GlobalStateContext = React.createContext();
export const DispatchContext = React.createContext();

//custom hooks to export refs to Buttons & other components

export function useAudioRef(){
    return useRef([]);

}

export function useButtonRef(){
    return useRef([]);

}


export const ACTIONS = {
    TOGGLE_POWER: "togglePower",
    CHANGE_VOLUME: "changeVolume",
    TOGGLE_BANK: "toggleBank",
    CHANGE_DISPLAY: "changeDisplay"
}

export default function MasterProvider( { children } ){
    
    const kit1 = { displayText: "Heater Kit", buttonList: [{letter: "Q", displayText: "Heater 1", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}, {letter: "W", displayText: "Heater 2", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}, {letter: "E", displayText: "Heater 3", url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}, {letter: "A", displayText: "Heater 4", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}, {letter: "S", displayText: "Clap", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}, {letter: "D", displayText: "Open Hi-Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}, {letter: "Z", displayText: "Kick n' Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}, {letter: "X", displayText: "Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}, {letter: "C", displayText: "Closed Hi-Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]};

    const kit2 = {displayText: "Smooth Piano Kit", buttonList: [{letter: "Q", displayText: "Chord 1", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}, {letter: "W", displayText: "Chord 2", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"}, {letter: "E", displayText: "Chord 3", url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"}, {letter: "A", displayText: "Shaker", url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"}, {letter: "S", displayText: "Open Hi-Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"}, {letter: "D", displayText: "Closed Hi-Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"}, {letter: "Z", displayText: "Punchy Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"}, {letter: "X", displayText: "Side Stick", url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"}, {letter: "C", displayText: "Snare", url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}]};


const [state, dispatch] = useReducer(reducer, {isPowerOn: true, currentVolume: 0.5, kitOneIsActive: true, isPlaying: false, drumKitData: kit1, displayText: kit1.displayText});


function reducer(state, action){

    switch(action.type) {

        case ACTIONS.TOGGLE_POWER:
        return {...state, isPowerOn: !state.isPowerOn}
        
        case ACTIONS.CHANGE_VOLUME:
        return {...state, currentVolume: action.payload}
        
        case ACTIONS.TOGGLE_BANK:
        return {...state, kitOneIsActive: !state.kitOneIsActive, drumKitData: state.kitOneIsActive === true ? kit2 : kit1, displayText: state.kitOneIsActive === true ? kit2.displayText: kit1.displayText}

        case ACTIONS.CHANGE_DISPLAY:
        return {...state, displayText: action.payload}

        default:
        return state;
    }
}


return(

        <GlobalStateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </GlobalStateContext.Provider>
);

}


