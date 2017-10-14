import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {
  state = {
    
    greeting:'Hello!',
    testforstate:'stategggg',
    
    
  }
  
  componentDidMount(){
    
    setTimeout(()=>{
      
      this.setState({
        
        movies: [ //컴포넌트 내부로 데이터 이동
          
            { 
              title: "Matrix2" ,
              poster: "http://cfile2.uf.tistory.com/image/03217F4A509D113526C558" 
            },
    
            { 
              title: "Full Metal Jacket",
              poster: "https://resizing.flixster.com/LTuNtJsmLevuXO2kS_Uh8xMUDa0=/206x305/v1.bTsxMTE2ODAyOTtqOzE3NTQ0OzEyMDA7ODAwOzEyMDA",//자켓
            },
    
            {
              
              title: "Oldboy" ,
              poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/250px-Old_Boy.jpg" 
            },
    
            {
              title: "Star Wars" ,
              poster: "http://cfile29.uf.tistory.com/image/275C6D465613CFDD0D4D4A" 
            }
    
          ]
          })

    },1000)
    
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map((movie,index) =>{ 
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() { 
    return ( 
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading' }
      </div>  
      );
  }
}

export default App;



