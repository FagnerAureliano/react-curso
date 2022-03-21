import React from 'react';
import logo from './logo.svg';
import './App.css'; 
// import HelloWorld from './HelloWorld';

const Component = React.createElement('div', { style: { background: 'red' } }, 'Olá, Mundo!!')


const HTMLElement = document.createElement('div')
HTMLElement.style.background = 'red'
HTMLElement.innerText = 'Olá, mundo!'

console.log(Component);
console.dir(HTMLElement);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Component}
        {/* <HelloWorld /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;