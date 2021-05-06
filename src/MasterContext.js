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

//for display, maybe create a global displayText item in state in reducer function, and dispatch on keydown, on audioClick & on bank switch. Make sure sources of truth do not conflict about state.displayText
//maybe erase keyCodes from objects if they're not being used anywhere

export default function MasterProvider( { children } ){
    
    const kit1 = { displayText: "Heater Kit", buttonList: [{letter: "Q", displayText: "Heater 1", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}, {letter: "W", displayText: "Heater 2", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}, {letter: "E", displayText: "Heater 3", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}, {letter: "A", displayText: "Heater 4", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}, {letter: "S", displayText: "Clap", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}, {letter: "D", displayText: "Open Hi-Hat", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}, {letter: "Z", displayText: "Kick n' Hat", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}, {letter: "X", displayText: "Kick", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}, {letter: "C", displayText: "Closed Hi-Hat", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]};

    const kit2 = {displayText: "Smooth Piano Kit", buttonList: [{letter: "Q", displayText: "Chord 1", keyCode: 81, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}, {letter: "W", displayText: "Chord 2", keyCode: 87, url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"}, {letter: "E", displayText: "Chord 3", keyCode: 69, url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"}, {letter: "A", displayText: "Shaker", keyCode: 65, url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"}, {letter: "S", displayText: "Open Hi-Hat", keyCode: 83, url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"}, {letter: "D", displayText: "Closed Hi-Hat", keyCode: 68, url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"}, {letter: "Z", displayText: "Punchy Kick", keyCode: 90, url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"}, {letter: "X", displayText: "Side Stick", keyCode: 88, url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"}, {letter: "C", displayText: "Snare", keyCode: 67, url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}]};


const [state, dispatch] = useReducer(reducer, {isPowerOn: true, currentVolume: 0.5, kitOneIsActive: true, isPlaying: false, drumKitData: kit1, displayText: kit1.displayText});


function reducer(state, action){

    switch(action.type) {

        case ACTIONS.TOGGLE_POWER:
        return {...state, isPowerOn: !state.isPowerOn/*, isPlaying: false*/}
        
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


