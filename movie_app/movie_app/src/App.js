import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

/*
const moviesTitles = [

  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImg =[
"http://cfile2.uf.tistory.com/image/03217F4A509D113526C558", //메트릭스
"https://resizing.flixster.com/LTuNtJsmLevuXO2kS_Uh8xMUDa0=/206x305/v1.bTsxMTE2ODAyOTtqOzE3NTQ0OzEyMDA7ODAwOzEyMDA",//자켓
"https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/250px-Old_Boy.jpg",//올드보이
"http://cfile29.uf.tistory.com/image/275C6D465613CFDD0D4D4A"//스타

]
*/

const movies=[

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


class App extends Component {
  render() { 
    return ( 
      
      <div className="App">
          {
            movies.map((movie,index) =>{ 
                  
              return <Movie title={movie.title} poster={movie.poster} key={index} />

          })}
        
      </div>  
      );
  }
}

export default App;



