import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import necessary components from react-router-dom
import './App.css';
import Home from './components/Home/home.jsx';
import Login from './components/Login/login.jsx';
import Signup from './components/Signup/signup.jsx';
import Travel from './components/Travel/travel.jsx';
import About from './components/About/about.jsx';
import ForgetPassword from './components/ForgetPassword/fg.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/travel" component={Travel} />
        <Route path="/about" component={About} />
        <Route path="/forget_password" component={ForgetPassword} />
      </Switch>
    </Router>
  );
}

export default App;
