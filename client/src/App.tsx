import {Container} from "react-bootstrap";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Main from "./components/Main/Welcome";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import NavBar from "./components/Navigation/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
        </Switch>
      </Container>
    </Router>
    
  );
}

export default App;
