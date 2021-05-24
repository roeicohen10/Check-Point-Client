import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div>
        <Switch>
        <Route path="/" exact component={LandingPage} />
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
