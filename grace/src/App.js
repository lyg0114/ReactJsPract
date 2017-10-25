import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
class Square extends Component { //controlled components.

  render(){
    return(
      <button className="square" 
      onClick={() => this.props.onClick()}>
      {this.props.value}
      </button>
    )
  }

}
*/

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


class App extends Component {
  
  constructor(props){ //생성자
    super(props);
    this.state = {
      squares1: Array(9).fill(null), //9개의 비어있는 배열
    }
  }
  
  handleClick(i) {
    const squares2 = this.state.squares1.slice();
    squares2[i] = 'X';
    this.setState({squares1: squares2});
  }

  renderSquare(i){
    return <Square value={this.state.squares1[i]}
                  onClick={() => this.handleClick(i)}
    />;  
  }
  render() {
    
    const status = 'Next player: X';
    return (
      
    <div>
      <li>
        {status}
      </li>
      
      <div className="row">
        {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
      </div>
      <div className="row">
        {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
      </div>
      <div className="row">
        {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
      </div>
      
       
    </div>
      


    );
  }
}

export default App;
