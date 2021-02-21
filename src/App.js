import { Switch, Route } from "react-router-dom";  
import Home from "./screens/Home/Home"; 
import About from "./screens/About/About"; 
import Contact from "./screens/Contact/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route> 
        <Route path="/about">
          <About />
        </Route> 
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
