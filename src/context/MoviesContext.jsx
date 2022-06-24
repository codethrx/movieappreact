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
const buttons = [
  { name: "All", active: true, genre: 0 },
  { name: "Comedy", active: false, genre: 35 },
  { name: "Actions", active: false, genre: 28 },
];
//creating the context
const MovieContext = createContext();
//init state
const init = {
  buttons,
  selected: buttons[0],
  moviesState: null,
  loading: true,
  filteredMovies: null,
};
function movieReducer(state, action) {
  switch (action.type) {
    case "SET_BUTTON":
      return {
        ...state,
        selected: action.payload,
        buttons: state.buttons.map((b) => {
          if (b.name === action.payload.name) {
            return { ...b, active: true };
          } else return { ...b, active: false };
        }),
      };
    case "SET_MOVIES":
      return {
        ...state,
        filteredMovies: action.payload,
        moviesState: action.payload,
        loading: false,
      };
    case "SET_FILTERED_MOVIES":
      return {
        ...state,
        filteredMovies: action.payload,
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
    console.log(movies);
    dispatch({ type: "SET_MOVIES", payload: movies.data.results });
  }, [url]);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  useEffect(() => {
    if (state.selected.genre === 0) {
      dispatch({ type: "SET_FILTERED_MOVIES", payload: state.moviesState });
      return;
    }
    const filteredMovie = state.moviesState?.filter((movie) => {
      return movie?.genre_ids?.includes(state.selected.genre);
    });
    dispatch({ type: "SET_FILTERED_MOVIES", payload: filteredMovie });
  }, [state.selected]);
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
