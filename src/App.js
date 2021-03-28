
import './App.css';
import React/*, { useState }*/ from 'react';
import Machine from './Machine.js';

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
      {/*const [power, setPower] = useState(true);
      const [display, setDisplay] = useState("");*/}
      <Machine /> 
    </div>
  );
}

export default App;
