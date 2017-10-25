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
    this.state = { //stat를 정의해둠
      squares1: Array(9).fill(null), //9개의 비어있는 배열
      xIsNext: true,

    }
  }
  
  handleClick(i) {
    const squares2 = this.state.squares1.slice(); //state를 복사해서 사용!!
    squares2[i] =  this.state.xIsNext ? 'X' : 'O'; //squares2[i] 
    this.setState({squares1: squares2 ,
                   xIsNext: !this.state.xIsNext,
    }); //바뀐 부분만 업데이트 해준다!!
  }

  renderSquare(i){
    return <Square value={this.state.squares1[i]} onClick={() => this.handleClick(i)} />;  
  }
 
  render() {
    
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    
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