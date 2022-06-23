//importing the routes object
import routes from "./utils/routes";
import { useMovieContext } from "./context/MoviesContext";
//React router dom
import { Routes, Route } from "react-router-dom";
//styled
import styled from "styled-components";
import { motion } from "framer-motion";
function App() {
  const { buttons, dispatch, selected, filteredMovies } = useMovieContext();
  console.log(filteredMovies);
  return (
    <div className="app">
      <div className="movies-filter-btns">
        {buttons.map((button) => (
          <StyledButton
            key={button.name}
            className={button.active ? "filter-btn-active" : "btn"}
            onClick={() => {
              dispatch({ type: "SET_BUTTON", payload: button });
            }}
          >
            {button.name}
          </StyledButton>
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
const StyledButton = styled.button`
  padding: 0.3rem 0.2rem;
  font-size: 0.8rem;
  border: none;
  border: 1px solid rgb(65, 98, 168);
  background: transparent;
  color: rgb(65, 98, 168);
  margin-right: 1rem;
  width: 4rem;
  .filter-btn-active {
    background-color: rgb(65, 98, 168);
    color: white;
  }

  /* outline: none;
  transition: 0.4s ease;
  border-radius: 1rem;

  &:hover {
    background-color: rgb(65, 98, 168);
    color: white;
  } */
`;
export default App;
