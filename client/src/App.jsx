import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import './App.css';
import Home from './components/Home/home.jsx';
import Login from './components/Login/login.jsx';
import Signup from './components/Signup/signup.jsx';
import Travel from './components/Travel/travel.jsx';
// import About from './components/About/about.jsx';
import ForgetPassword from './components/ForgetPassword/fg.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/travel" exact element={<Travel />} />
        {/* <Route path="/about" exact element={About} /> */}
        <Route path="/forget_password" exact element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
