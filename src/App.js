import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'

// Different routes
import Home from './components/Home'
import Form from './components/Form'
import Complete from './components/Complete'

import "./App.css";

const App = () => {
  return (
    <>
      <Route exact path='/'>
        <Home />
     </Route>

    <Route path='/pizza'>
      <Form />
    </Route>
    </>
  );
};
export default App;
