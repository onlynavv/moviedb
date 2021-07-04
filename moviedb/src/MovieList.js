import React from 'react'

const MovieList = ({movies}) => {
    return (
        <>
            {movies.map((movie)=>{
                return(
                    <div key={movie.imdbID} className='movie-indv'>
                        <img src={movie.Poster} alt={movie.Title}></img>
                        <h4>{movie.Title}</h4>
                    </div>
                )
            })}
        </>
    )
}

export default MovieList
