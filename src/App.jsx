import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage/HomePage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/signup' component={SignUpPage}/>
        <Route path='/home' component={HomePage}/>
        <Route path='/about' component={AboutPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
