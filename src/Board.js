import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
  render() {
    const { pieces: [p1, p2] } = this.props;
    
    return (
      <div className="Board">
        <div className="topRow">
          <div className="p2-home"/>

          {Array(6).fill(0).map((o,j)=>(
            <div className="pip">
              <svg viewBox='0 0 100 1000' style={{ position: 'absolute', left: 0, zIndex: 100}}>
                {p1.filter(p=> p===j+1).map((o, i)=>(
                  <circle key={i} cx={50} cy={26 + 53*i} r={25} fill='red' stroke='black' strokeWidth={3}/>
                ))}
                {p2.filter(p=> p===j+1).map((o, i)=>(
                  <circle key={i} cx={50} cy={26 + 53*i} r={25} fill='blue' stroke='black' strokeWidth={3}/>
                ))}
              </svg>
            </div>
          ))}
          
          <div className="jail"/>

          {Array(6).fill(0).map((o,j)=>(
            <div className="pip">
              <svg viewBox='0 0 100 1000' style={{ position: 'absolute', left: 0, zIndex: 100}}>
                {p1.filter(p=> p===j+7).map((o, i)=>(
                  <circle key={i} cx={50} cy={26 + 53*i} r={25} fill='red' stroke='black' strokeWidth={3}/>
                ))}
                {p2.filter(p=> p===j+7).map((o, i)=>(
                  <circle key={i} cx={50} cy={26 + 53*i} r={25} fill='blue' stroke='black' strokeWidth={3}/>
                ))}
              </svg>
            </div>
          ))}
        </div>

        <div className="bottomRow">
          {Array(6).fill(0).map((o,j)=>(
            <div className="pip">
              <svg viewBox='0 0 100 500' style={{ position: 'absolute', left: 0, zIndex: 100}}>
                {p1.filter(p=> p===j+13).map((o, i)=>(
                  <circle key={i} cx={50} cy={26 + 53*i} r={25} fill='red' stroke='black' strokeWidth={3}/>
                ))}
                {p2.filter(p=> p===j+13).map((o, i)=>(
                  <circle key={i} cx={50} cy={26 + 53*i} r={25} fill='blue' stroke='black' strokeWidth={3}/>
                ))}
              </svg>
            </div>
          ))}
          
          <div className="jail"/>

          {Array(6).fill(0).map((o,j)=>(
            <div className="pip">
              <svg viewBox='0 0 100 500' style={{ position: 'absolute', height: '100%', left: 0, zIndex: 100}}>
                {p1.filter(p=> p===j+19).map((o, i)=>(
                  <circle key={i} cx={50} cy={26 + 53*i} r={25} fill='red' stroke='black' strokeWidth={3}/>
                ))}
                {p2.filter(p=> p===j+19).map((o, i)=>(
                  <circle key={i} cx={50} cy={26 + 53*i} r={25} fill='blue' stroke='black' strokeWidth={3}/>
                ))}
              </svg>
            </div>
          ))}
          
          <div className="p1-home"/>
        </div>

        
      </div>
    );
  }
}

export default Board;
