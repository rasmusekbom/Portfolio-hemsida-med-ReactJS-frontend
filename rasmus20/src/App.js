import './App.css';
import NavBar from './Components/NavBar';
import Mycv from './Components/Mycv';
import StartsidaContent from './Components/StartsidaContent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contactme from './Components/Contactme';
import Myportfolio from './Components/Myportfolio';
import Aboutme from './Components/Aboutme';
import CvScript from './Components/CvScript';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch> 

            <Route exact path="/">
              <StartsidaContent/>
            </Route>

            <Route exact path="/Mycv">
              <Mycv/>
              <CvScript/>
            </Route>

            <Route exact path="/Aboutme">
              <Aboutme/>
            </Route>

            <Route exact path="/Myportfolio">
              <Myportfolio/>
            </Route>

            <Route exact path="/Contactme">
              <Contactme/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
