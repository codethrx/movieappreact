//importing the routes object
import routes from "./utils/routes";
import { useMovieContext } from "./context/MoviesContext";
//React router dom
import { Routes, Route } from "react-router-dom";

function App() {
  const { buttons, dispatch, selected } = useMovieContext();
  console.log(selected);
  return (
    <div className="app">
      <div className="movies-filter-btns">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => {
              dispatch({ type: "SET_BUTTON", payload: button });
            }}
          >
            {button}
          </button>
        ))}
      </div>
      <Routes>
        {routes.map(({ route, path, id }) => (
          <Route element={route} path={path} key={id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
