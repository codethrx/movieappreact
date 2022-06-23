//Importing routes
import Movies from "../pages/Movies";
//creating a global objects for looping through routes
const routes = [
  { route: <Movies />, id: 1, path: "/" },
  //for testing more than one routes
  { route: <h1>Test Route</h1>, id: 2, path: "/test" },
];

export default routes;
