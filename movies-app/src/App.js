import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './pages/Home'; 
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
        <Route path="/cocktail/:id" >
          <SingleCocktail />
        </Route>
      </Switch>
      
      </Router>
  );
}

export default App;
