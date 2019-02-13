import React, { Component } from 'react';
import './Board.css';

class App extends Component {
  render() {
    return (
      <div className="Board">
        <div className="topRow">
          <div className="p2-home"/>
          
          <div className="pip">
            <svg viewBox='0 0 100 1000' style={{ position: 'absolute', left: 0, zIndex: 100}}>
              {Array(5).fill(0).map((o, i)=>(
                <circle key={i} cx={50} cy={26 + 53*i} r={25} fill='red' stroke='black' strokeWidth={3}/>
              ))}
            </svg>
          </div>
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
