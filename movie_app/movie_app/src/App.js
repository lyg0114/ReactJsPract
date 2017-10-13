import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {
  state = {
    
    greeting:'Hello!',
    testforstate:'stategggg',
    
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

  }
  
  componentDidMount(){
    
    setTimeout(()=>{
      
      this.setState({
        
        movies:[
          
          ...this.state.movies, //앞에 선언되어있었던 놈들~

          {
            title: "Transpotting",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDlhMjIwN2UtZTE5ZC00YzQ2LWI3ODYtZTMzY2MyN2VmYTI4L2ltYWdlXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._CR67,56,750,750_UX402_UY402._SY201_SX201_AL_.jpg"
          },

          

        ]
      })

    },3000)
    
  }
  
  render() { 
    return ( 
      
      <div className="App">
        <br/>
            { this.state.movies.map((movie,index) =>{ 
              return <Movie title={movie.title} poster={movie.poster} key={index} />
            })}
        
      </div>  
      );
  }
}

export default App;



