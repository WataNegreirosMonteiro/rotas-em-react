import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Signin from './pages/signin';
import Signup from './pages/signup';

export default function App(){
 return (
    <BrowserRouter>
      <Routes>
        <Route path="*">
          <Route index element={<Signin />} />
        </Route>

        <Route path="/signin">
          <Route index element={<Signin />} />
        </Route>
        
        <Route path="/home">
          <Route index element={<Home />} />
        </Route>
        
        <Route path="/signup">
          <Route index element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}