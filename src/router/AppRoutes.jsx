import React, { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/pages/loading/Loading";
import ProtectedRouter, {
  ProtectedRouteForUnAuthorizedPage,
} from "./ProtectedRouter";
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
const SignUp = lazy(() => import("../components/pages/sign up/SignUp"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRouteForUnAuthorizedPage>
              <LandingPage />
            </ProtectedRouteForUnAuthorizedPage>
          </Suspense>
        }
      />
      <Route
        path="/signUp"
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRouteForUnAuthorizedPage>
              <SignUp />
            </ProtectedRouteForUnAuthorizedPage>
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRouteForUnAuthorizedPage>
              <LoginPage />
            </ProtectedRouteForUnAuthorizedPage>
          </Suspense>
        }
      />
      <Route
        path="/movies"
        element={
          <Suspense fallback={<Loading />}>
            <ProtectedRouter>
              <MoviesLayout />
            </ProtectedRouter>
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
