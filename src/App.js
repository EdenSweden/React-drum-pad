
import './App.css';
import React from 'react';
import Machine from './Machine';
import MasterProvider from './MasterContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';


function App() {

  return (
    <MasterProvider>
    <div className="App">
      <h1>Drum Pad <sup><FontAwesomeIcon icon={faMusic} id="music-notes" aria-hidden="true" /></sup></h1>
      <Machine />
    </div>
    </MasterProvider> 
  );
}

export default App;
