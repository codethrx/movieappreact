//importing the routes object and context
import routes from "./utils/routes";
import { useMovieContext } from "./context/MoviesContext";
//React router dom
import { Routes, Route, useLocation } from "react-router-dom";
//components
import FilterButtons from "./components/reusables/FilterButtons";
import Navbar from "./components/reusables/Navbar";

function App() {
  const { buttons, dispatch, selected, filteredMovies } = useMovieContext();
  const location = useLocation();
  console.log(location);
  return (
    <div className="app">
      <Navbar />
      {location.pathname === "/" && (
        <FilterButtons buttons={buttons} dispatch={dispatch} />
      )}

      <Routes>
        {routes.map(({ route, path, id }) => (
          <Route element={route} path={path} key={id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
