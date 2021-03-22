import './App.css';
import Contabilizar from './pages/contabilizar.jsx'
import Register from './pages/register.js'
import Login from './pages/login.jsx'
import Home from './pages/home.jsx'
import Crear from './pages/crear_tarea.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/contabilizar">
          <Contabilizar/>
        </Route>
        <Route path="/crear">
          <Crear/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
