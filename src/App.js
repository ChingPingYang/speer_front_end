import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routeMap } from "./routes/routeMap";
function App() {
  return (
    <Router>
      <Suspense fallback={<p>loading</p>}>
        <Switch>
          {routeMap.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
