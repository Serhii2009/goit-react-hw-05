import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import "./App.css";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const Details = lazy(() => import("../pages/Details"));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
