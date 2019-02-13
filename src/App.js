import React, { Component } from 'react';
import './App.css';

import Board from './Board';

class App extends Component {

  state = {
    pieces: [
      [
        1, 1,
        12, 12, 12, 12, 12,
        17, 17, 17,
        19, 19, 19, 19, 19,
      ], [
        24, 24,
        13, 13, 13, 13, 13,
        8, 8, 8,
        6, 6, 6, 6, 6,
      ]
    ]
  }
  
  render() {
    return (
      <div className="App">
        <Board pieces={this.state.pieces}/>
      </div>
    );
  }
}

export default App;
