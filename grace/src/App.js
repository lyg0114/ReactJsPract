import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends Component {

  constructor(){
    super();
    this.state={
      value: null,
    };

  }
  
  render(){
    return(
      <button className="square" 
      onClick={() => this.setState({value: 'X'})}>
      
      {this.state.value}
      
      </button>
    )
  }

}

class App extends Component {
  ShowData(i){
    return <Square />;  
  }
  render() {
    
    const status = 'Next player: X';
    return (
      
    <div>
      <li>
        {status}
      </li>
      
      <div className="row">
        {this.ShowData(1)}
        {this.ShowData(2)}
        {this.ShowData(3)}
      </div>
      
      <div className="row">
        {this.ShowData(4)}
        {this.ShowData(5)}
        {this.ShowData(6)}
      </div>
      
      <div className="row">
        {this.ShowData(7)}
        {this.ShowData(8)}
        {this.ShowData(9)}
      </div>
      
       
    </div>
      


    );
  }
}

export default App;
