import  { useEffect, useState } from 'react';
import { TMDB_API_KEY } from '../config';

// https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}

export const useFetch = (params) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchMovie = (url) => {
      setIsLoading(true);
      fetch(url)
          .then(respuesta => respuesta.json())
          .then(respuestaJson => {
              if (respuestaJson.Response === "True") {
                  //console.log("res: ", respuestaJson);
                  setData(respuestaJson.Search || respuestaJson);
                  setError(false);
              } else {
                  setError(true);
              }
              setIsLoading(false);
          }).catch(error => {console.log(error);})
  }
  useEffect(() => {
      fetchMovie(`${TMDB_API_KEY}${params}`);
  }, [params])

  return {isLoading, error, data}
}



