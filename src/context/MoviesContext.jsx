import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";
//env variables
const KEY = import.meta.env.VITE_API_KEY;
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`;
//creating the context
const MovieContext = createContext();
//init state
const init = {
  buttons: ["All", "Comedy", "Actions"],
  selected: "All",
  moviesState: null,
  loading: true,
  filteredMovies: null,
};
function movieReducer(state, action) {
  switch (action.type) {
    case "SET_BUTTON":
      return { ...state, selected: action.payload };
    case "SET_MOVIES":
      return {
        ...state,
        filteredMovies: action.payload,
        moviesState: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
//Context Provider
function MovieContextProvider({ children }) {
  const [state, dispatch] = useReducer(movieReducer, init);
  //fetching data of movies
  const fetchMovies = useCallback(async () => {
    const movies = await axios.get(url);
    dispatch({ type: "SET_MOVIES", payload: movies.data.results });
  }, [url]);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  return (
    <MovieContext.Provider value={{ dispatch, ...state }}>
      {children}
    </MovieContext.Provider>
  );
}

//Context Consumer
const useMovieContext = () => {
  const contextValues = useContext(MovieContext);
  return contextValues;
};
export { MovieContextProvider, useMovieContext };
