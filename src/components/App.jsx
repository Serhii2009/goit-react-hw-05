import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Movies } from "../pages/Movies";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Details from "../pages/Details";

import { AppHeader } from "../components/AppHeader/AppHeader";

import MovieCast from "../components/MovieCast/MovieCast";
import MovieReviews from "../components/MovieReviews/MovieReviews";

export const App = () => {
  return (
    <>
      <AppHeader />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<Details />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
