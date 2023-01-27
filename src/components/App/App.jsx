import React from 'react';
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <div id="gallery-container">
        <img src="images/goat_small.jpg"/>
        <img src="images/Bemidji.jpeg"/>
        <img src="images/Colorado.jpeg"/>
        <img src="images/Cooking-Demonstration.jpeg"/>
        <img src="images/Family-Christmas.jpeg"/>
        <img src="images/Moby-Christmas.jpeg"/>
        </div>
      </div>
    );
}

export default App;
