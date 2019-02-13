import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
  render() {
    const { onClickPip=(()=>0), pieces: [p1, p2] } = this.props;
    
    return (
      <div className="Board">
        <div className="topRow">
          <div className="p2-home" onClick={()=> onClickPip(0)}/>

          {Array(6).fill(0).map((o,j)=>(
            <div className="pip" key={'s1'+j} onClick={()=> onClickPip(1+j)}>
              <svg viewBox='0 0 80 400' style={{ position: 'absolute', maxHeight: '100%', left: 0, zIndex: 100}}>
                {p1.filter(p=> p===j+1).map((o, i)=>(
                  <circle key={'p11'+i} cx={40} cy={26 + 53*i} r={25} fill='red' stroke='black' strokeWidth={3}/>
                ))}
                {p2.filter(p=> p===j+1).map((o, i)=>(
                  <circle key={'p21'+i} cx={40} cy={26 + 53*i} r={25} fill='blue' stroke='black' strokeWidth={3}/>
                ))}
              </svg>
            </div>
          ))}
          
          <div className="jail"/>

          {Array(6).fill(0).map((o,j)=>(
            <div className="pip" key={'s2'+j} onClick={()=> onClickPip(7+j)}>
              <svg viewBox='0 0 80 400' style={{ position: 'absolute', maxHeight: '100%', left: 0, zIndex: 100}}>
                {p1.filter(p=> p===j+7).map((o, i)=>(
                  <circle key={'p12'+i} cx={40} cy={26 + 53*i} r={25} fill='red' stroke='black' strokeWidth={3}/>
                ))}
                {p2.filter(p=> p===j+7).map((o, i)=>(
                  <circle key={'p22'+i} cx={40} cy={26 + 53*i} r={25} fill='blue' stroke='black' strokeWidth={3}/>
                ))}
              </svg>
            </div>
          ))}
        </div>

        <div className="bottomRow">
          {Array(6).fill(0).map((o,j)=>(
            <div className="pip" key={'s3'+j} onClick={()=> onClickPip(13+j)}>
              <svg viewBox='0 0 80 400' style={{ position: 'absolute', maxHeight: '100%', left: 0, zIndex: 100}}>
                {p1.filter(p=> p===j+13).map((o, i)=>(
                  <circle key={'p13'+i} cx={40} cy={26 + 53*i} r={25} fill='red' stroke='black' strokeWidth={3}/>
                ))}
                {p2.filter(p=> p===j+13).map((o, i)=>(
                  <circle key={'p23'+i} cx={40} cy={26 + 53*i} r={25} fill='blue' stroke='black' strokeWidth={3}/>
                ))}
              </svg>
            </div>
          ))}
          
          <div className="jail"/>

          {Array(6).fill(0).map((o,j)=>(
            <div className="pip" key={'s4'+j} onClick={()=> onClickPip(19+j)}>
              <svg viewBox='0 0 80 400' style={{ position: 'absolute', maxHeight: '100%', left: 0, zIndex: 100}}>
                {p1.filter(p=> p===j+19).map((o, i)=>(
                  <circle key={'p14'+i} cx={40} cy={26 + 53*i} r={25} fill='red' stroke='black' strokeWidth={3}/>
                ))}
                {p2.filter(p=> p===j+19).map((o, i)=>(
                  <circle key={'p24'+i} cx={40} cy={26 + 53*i} r={25} fill='blue' stroke='black' strokeWidth={3}/>
                ))}
              </svg>
            </div>
          ))}
          
          <div className="p1-home" onClick={()=> onClickPip(25)}/>
        </div>

        
      </div>
    );
  }
}

export default Board;
