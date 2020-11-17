import React from "react";
import "./App.css";
import { Switch, Route } from "wouter";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import ErrorPage from "./pages/404/404";

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
