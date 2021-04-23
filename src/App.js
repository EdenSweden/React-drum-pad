
import './App.css';
import React/*, { useState }*/ from 'react';
import Machine from './Machine.js';
import MasterProvider from './MasterContext.js';


function App() {

  return (
    <MasterProvider>
    <div className="App">
      <Machine />
    </div>
    </MasterProvider> 
  );
}

export default App;
