import { MovieData } from './types/MovieData';
import { ResponseError } from './types/ReponseError';

export function getMovie(query: string): Promise<MovieData | ResponseError> {
  const apiKey = import.meta.env.VITE_OMDb_API_KEY;
  const API_URL = `https://www.omdbapi.com/?apikey=${apiKey}`;

  return fetch(`${API_URL}&t=${query}`)
    .then(res => res.json())
    .catch(() => ({
      Response: 'False',
      Error: 'unexpected error',
    }));
}
