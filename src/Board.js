import React, { Component } from 'react';
import './Board.css';

class App extends Component {
  render() {
    return (
      <div className="Board">
        <div className="topRow">
          <div className="p2-home"/>
          
          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>
          
          <div className="jail"/>

          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>
        </div>

        <div className="bottomRow">
          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>
          
          <div className="jail"/>

          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>
          <div className="pip"/>

          <div className="p1-home"/>
        </div>

        
      </div>
    );
  }
}

export default App;
