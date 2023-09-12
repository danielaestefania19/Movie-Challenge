import React, { useState }  from 'react'
import './App.css'

function App() {
 const API_URL = 'http://api.themoviedb.org'
 const API_KEY = 'aed86604ab940ab3a821d5f03c7bd06b'
 const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
 const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

 //variables de estado 
 const [movies, setMovies] = useState([])
 const [searchKey, setSearchKey] = useState("")
 const [trailer, setTrailer] = useState(null);
 const [movie, setMovie] = useState ({title: "Loading Movies" }); 
 const [playing, setPlaying] = useState (false); 

 //funcion para realizar la peticion por get a la api

 


  return (
    <>
    </>
  )
}

export default App
