import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Authentication from "./components/authentication/Authentication";


function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Switch>
          <Route exact path="/">
            <Authentication />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
