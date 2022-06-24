//Importing routes
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
//creating a global objects for looping through routes
const routes = [
  { route: <Movies />, id: 1, path: "/" },
  //for testing more than one routes
  { route: <MovieDetails />, id: 2, path: "/movies/:movieID" },
];

export default routes;
