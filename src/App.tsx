import React from 'react';
import logo from './logo.svg';
import './App.css';  
import Clock from './Clock';
import HelloWorld from './HelloWorld';
// import HelloWorld from './HelloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Clock />
        {/* <HelloWorld /> */}
        
      </header>
    </div>
  );
}

export default App;