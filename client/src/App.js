import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Pomodoro from "./components/Pomodoro";
import Home from "./components/Home"
import Login from "./components/Login"
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Reset from './components/Reset';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path = {'/'} element = {<Home/>} />
          <Route path = {'/login'} element = {<Login/>}/>
          <Route path = {'/register'} element = {<Register/>}/>
          <Route path = {'/dashboard'} element = {<Dashboard/>}/>
          <Route path = {'/reset'} element = {<Reset/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;