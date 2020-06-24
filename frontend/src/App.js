import React from "react";
import { HashRouter, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Main from "./routes/Main";
import Input from "./routes/Input";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Main} />
      <Route path="/home" exact={true} component={Home} />
      <Route path="/Input" exact={true} component={Input} />
    </HashRouter>
  );
}

export default App;
