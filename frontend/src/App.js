import './App.css';
import Grafica from './components/Grafica.jsx'
import Register from './components/register.js'
import Login from './components/login.jsx'
import Home from './components/home.jsx'
import Crear from './components/crear_tarea.jsx'
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
        <Route path="/grafica">
          <Grafica/>
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
