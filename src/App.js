import React from "react";

// Set up all routes in App
import { Route } from "react-router-dom";

// Using custom styled components from Global folder in components
import { AppWrapper } from "./components/Global/styled";

// Importing all routes
import HomePage from "./components/HomePage";
import ReduxCounter from "./components/ReduxCounter";

const App = () => {
  return (
    <AppWrapper>
      <Route path="/" exact component={HomePage} />
      <Route path="/counter" component={ReduxCounter} />
    </AppWrapper>
  );
};

export default App;
