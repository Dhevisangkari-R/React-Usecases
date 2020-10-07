import React from 'react';
import emart from './emart.jpg'
import './App.css'
function App(props) {
  return (
    <div className="container">
    <img src={emart} alt="emart" className="App"/> 
  <div className="card bg-primary text-white ">
    <div className="card-body" align="center"><h1>Welcome to e-mart!!! Happy shopping {props.name}!!!</h1></div>
  </div>
  </div>
   );
}

export default App;
