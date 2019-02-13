
./src/App.js
```js
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
```


./src/Board.js
```js
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
```


./src/Board.css
```css


```


https://css-tricks.com/snippets/css/css-triangle/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
