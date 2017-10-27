import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';


function Square(props) {
  return (
    <Button bsStyle="success" className="square" onClick={props.onClick}>
      {props.value}
    </Button>
  );
}

function calculateWinner(squares) { //승자 정하기
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; //승자가 정해진 경우
    }
  }
  return null;
}


class App extends Component {
  
  constructor(props){ //생성자
    super(props);
    this.state = { //stat를 정의해둠
      squares1: Array(9).fill(null), //9개의 비어있는 배열
      xIsNext: true,

    }
  }
  
  handleClick(i) {
    const squares2 = this.state.squares1.slice(); //state를 복사해서 사용!!
    
    if (calculateWinner(squares2) || squares2[i]) { 
      return; //승자가 정해지면 게임이 더이상 진행되지 않도록 설정!!!
    }

    squares2[i] =  this.state.xIsNext ? 'X' : 'O'; //squares2[i] 
    this.setState({squares1: squares2 ,
                   xIsNext: !this.state.xIsNext,
    }); //바뀐 부분만 업데이트 해준다!!
  }

  renderSquare(i){
    return <Square value={this.state.squares1[i]} onClick={() => this.handleClick(i)} />;  
  }
 
  render() {
    
    const winner = calculateWinner(this.state.squares1);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    
    return (
      
    <div>
      
      <div id="title">
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
    </div>
      


    );
  }
}

export default App;