import React from 'react';
import '../css/App.css';
import NavBar from '../components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Doctors from './doctors/Doctors';


function App() {
  return (
    <Router>
      <div className="wrapper">
        <section className="pages">
          <Route path="/" component={Home}/>
          <Route path="/doctors" component={Doctors}/>
        </section>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
