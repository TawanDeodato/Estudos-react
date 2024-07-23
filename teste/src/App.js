import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {

  return (
    <Router> 
      <NavBar />
      <Switch>
        <Router path="/">
          <Home />
        </Router>
        <Router path="/empresa">
          <Empresa />
        </Router>
        <Router path="/contato">
          <Contato />
        </Router>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
