import React,{useState,useEffect} from 'react'
// import {data} from './data'
import MovieList from './MovieList';
import './index.css'

const url  = 'https://www.omdbapi.com/?s=avengers&apikey=7a76f4a8'

function App() {
  
  const [movies,setMovies] = useState([])

  const getMovie = async() => {
    const movieData = await fetch(url)
    const dataList = await movieData.json()
    // console.log(dataList.Search)
    setMovies(dataList.Search)
  }

  useEffect(()=>{
    getMovie();
  },[])

  return (
    <div className="App">
      <h1>Movie DB Search</h1>
      <div className='movie-row'>
        <MovieList movies={movies} />
      </div>
      
    </div>
  );
}

export default App;
