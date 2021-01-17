import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super()
    this.state={
      board : Array(9).fill("X")
    }
  }
  
  render() {

   const Box= this.state.board.map((box)=>{
      return(
        <div className='box'>{box}</div>
      );
    })

    return (
      <div className='container'>
        <h1>Tic Tac Toe</h1>
        <div className='board'>

        {Box}
        </div>
      </div>
    );
  }
}

export default App;

