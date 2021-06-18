import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom"
import "./App.css"

import Home from './components/Home'
import Form from './components/Form'

const App = () => {
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <div className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          </div>
        </nav>
      </header>

      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/pizza'>
        <Form />
      </Route>

    </>
  );
};
export default App;
