
import './App.css';
import React/*, { useState }*/ from 'react';
import Machine from './Machine.js';
import MasterProvider from './MasterContext.js';

/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: "",
      sound: "quiet"
    };
  }

  render() {
    return <Machine />;
  }
}*/

function App() {

  return (
    <div className="App">
      <MasterProvider>
      {/*const [power, setPower] = useState(true);
      const [display, setDisplay] = useState("");*/}
      <Machine />
      </MasterProvider> 
    </div>
  );
}

export default App;
