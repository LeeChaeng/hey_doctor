import React from "react";
import { HashRouter, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Main from "./routes/Main";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Main} />
      <Route path="/home" component={Home} />
    </HashRouter>
  );
}

export default App;
