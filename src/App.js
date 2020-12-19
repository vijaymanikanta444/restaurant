import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Layout1 from './components/layout/Layout1';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Router>
        <Layout />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Layout1 />
      </Router>
    </div>
  );
}

export default App;
