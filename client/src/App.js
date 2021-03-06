/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import React, { Suspense, lazy } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes/routes";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

import { useSelector} from "react-redux";
import { authSelectors} from "./redux/auth";

import Preloader from "./components/Preloader/Preloader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const homeView = lazy(() => import("./views/Main"));
const regView = lazy(() => import("./views/Register"));
const loginView = lazy(() => import("./views/Login"));
const userView = lazy(() => import("./views/User"));

function App() {
  let isAuthenticated = useSelector((state) =>
  authSelectors.getIsAuthenticated(state)
);
  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route
              exact
              redirectTo="/"
              path={routes.homeView}
              component={homeView}
            />
            <PublicRoute
              public
              redirectTo="/login"
              path={routes.loginPage}
              component={loginView}
            />
            <PublicRoute
              public
              redirectTo="/register"
              path={routes.registerPage}
              component={regView}
            />
            <PrivateRoute
              redirectTo='/user'
              path={routes.userPage}
              component={userView}
              isAuthenticated={isAuthenticated}
            />
            <Redirect to={routes.homeView} />
          </Switch>
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
