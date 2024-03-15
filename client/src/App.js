// import logo from './logo.svg';
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import home from './components/home'
import signIn from './components/signIn'
import signUp from './components/signUp'
import about from './components/about'
import services from './components/services'
import contact from './components/contact'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/signin" element={<signin />} />
          <Route exact path="/signup" element={<signup />} />
          <ProtectedRoute exact path="/" element={<home />} />
          <ProtectedRoute exact path="/about" element={<about />} />
          <ProtectedRoute exact path="/services" element={<services />} />
          <ProtectedRoute exact path="/contact" element={<contact />} />
        </Routes>
      </Router>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
//       </header>
//     </div>
//   );
// }

export default App;
