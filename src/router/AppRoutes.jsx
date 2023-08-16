import React, { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/pages/loading/Loading";
const LandingPage = lazy(() =>
  import("../components/pages/landingPage/LandingPage")
);
const LoginPage = lazy(() =>
  import("../components/pages/login page/LoginPage")
);
const NotFound = lazy(() => import("../components/pages/not found/NotFound"));
const MoviesLayout = lazy(() =>
  import("../components/pages/moviesLayout/MoviesLayout")
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <LandingPage />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<Loading />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="/movies"
        element={
          <Suspense fallback={<Loading />}>
            <MoviesLayout />
          </Suspense>
        }
      />
      <Route
        path="/*"
        element={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
