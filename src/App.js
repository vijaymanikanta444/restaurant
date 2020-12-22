import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Layout1 from './components/layout/Layout1';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/menuList/Menu';
import Home from './components/home/Home';
import Specials from './components/Specials';
import ScrollToTop from './components/ScrollToTop';
// import Test from './components/Test';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Layout />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/specials" component={Specials} />
        </Switch>
        <Layout1 />
      </Router>
    </div>
  );
}

export default App;
