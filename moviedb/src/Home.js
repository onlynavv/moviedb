import React,{useState,useEffect} from 'react'
// import {data} from './data'
import MovieList from './MovieList';
import './index.css'
import AddFavourites from './AddFavourites'
import RemoveFavourite from './RemoveFavourite'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Navbar';


function App() {
  
  const [movies,setMovies] = useState([])
  const [searchValue,setSearchValue] = useState('')
  const [favourites,setFavourites] = useState([])

  const getMovie = async() => {
    const url  = `https://www.omdbapi.com/?s=${searchValue}&apikey=7a76f4a8`
    const movieData = await fetch(url)
    const dataList = await movieData.json()
    // console.log(dataList.Search)

    if(dataList.Search){
        setMovies(dataList.Search)
    }
  }

  useEffect(()=>{
    getMovie();
  },[searchValue])

  const setLocalStorage = () => {
    localStorage.setItem('movies', JSON.stringify(favourites))
  }

  useEffect(() => {
    const getFavMovies = JSON.parse(localStorage.getItem('movies'));
    setFavourites(getFavMovies)
  }, [])

  useEffect(() => {
    setLocalStorage();
  }, [favourites])



  const handleInput = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  const handleFavourite = (movie) => {
    // console.log('clicked')
    setFavourites([...favourites,movie])
  }

  const handleRemoveFavourite = (movie) => {
    const newFavourites = favourites.filter((favourite)=>{
      return favourite.imdbID !== movie.imdbID
    })
    setFavourites(newFavourites)
  }

  return (
    <div className="App">
      <h1>Movies Search</h1>
      <div className='search-row'>
        <form>
          <input type='text' name='movie-search' value={searchValue} onChange={handleInput} placeholder='search movie..'></input>
        </form>
      </div>
      <div className='movie-row'>
        <MovieList movies={movies} handleFavourite={handleFavourite} FavouriteComponent={AddFavourites} />
      </div>
      <div className='favourite-movies'>
        <h1>Favourites</h1>
        <div className='movie-row'>
          <MovieList movies={favourites} handleFavourite={handleRemoveFavourite} FavouriteComponent={RemoveFavourite} />
        </div>
      </div>
    </div>
  );
}

export default App;
