
import './App.css';
import React from 'react';
import Machine from './Machine';
import MasterProvider from './MasterContext';


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
