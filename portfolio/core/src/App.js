import './App.css';
import Welcome from './components/welcome'
import Main from './components/main'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/" exact component={Welcome} />
        <Route path="/wwaw" exact component={Main} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
