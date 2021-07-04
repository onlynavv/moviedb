import React from 'react'

const MovieList = ({movies,handleFavourite,FavouriteComponent}) => {
    
    return (
        <>
            {movies.map((movie)=>{
                return(
                    <div key={movie.imdbID} className='movie-indv movie-container'>
                        <img src={movie.Poster} alt={movie.Title}></img>
                        <div className='overlay' onClick={()=>handleFavourite(movie)}>
                            <FavouriteComponent />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default MovieList
