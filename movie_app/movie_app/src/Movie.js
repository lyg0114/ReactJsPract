
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


/*class Movie extends Component{ //클래스 컴포넌트

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string
        
    }
    
    render(){
        return(
            <div>
            <MoviePoster poster={this.props.poster} />
            <h1>{this.props.title}</h1>
            </div>
            )
          
     }
}
*/

function Movie({title,poster}){ //function 컴포넌트
    return(
        <div>
        <MoviePoster poster={poster} />
        <h1>{title}</h1>
        </div>
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string
}





function MoviePoster({poster}){ //Dump 컴포넌트
    return(
        <img src={poster} />
    )
}
 
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}


export default Movie;