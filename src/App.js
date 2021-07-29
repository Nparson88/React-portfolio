import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import home from './pages/Home'
import projects from './pages/Projects'
import contact from './pages/Contact';
function App() {
  return (
    <div className="App">
     <Router>
     <Header/>
    <Switch>
    <Route exact path = "/" component={home}/>
    <Route exact path = "/projects" component={projects}/>
    <Route exact path = "/contact" component={contact}/>
    </Switch> 
  <Footer/>
</Router>
    </div>
  );
}

export default App;