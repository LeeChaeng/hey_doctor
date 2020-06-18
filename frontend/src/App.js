import React from "react";
import {} from "apexcharts";
import { HashRouter, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Test from "./routes/Test";

function App() {
  return (
    <HashRouter>
      <Route path="/home" component={Home} />
      <Route path="/test" component={Test} />
    </HashRouter>
  );
}

export default App;
