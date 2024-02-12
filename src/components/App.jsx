// import { Suspense, lazy } from "react";
// import { Routes, Route } from "react-router-dom";
// import NotFound from "../pages/NotFound";
// import "./App.css";
// import { AppHeader } from "./AppHeader/AppHeader";

// const Home = lazy(() => import("../pages/Home"));
// const Movies = lazy(() => import("../pages/Movies"));
// const Details = lazy(() => import("../pages/Details"));

// export const App = () => {
//   return (
//     <div>
//       <AppHeader />

//       <Suspense fallback={<div>Loading page...</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/movies" element={<Movies />} />
//           <Route path="/details" element={<Details />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// };

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Movies } from "../pages/Movies";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Details from "../pages/Details";

import { AppHeader } from "../components/AppHeader/AppHeader";

import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";

function App() {
  return (
    <>
      <AppHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Details />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
