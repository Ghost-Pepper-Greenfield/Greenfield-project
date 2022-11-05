import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Pomodoro from "./components/Pomodoro";
import MaintenancePage from './components/MaintenancePage';
import Login from "./components/Login"
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Reset from './components/Reset';
import NavBar from './components/NavBar';
import Study from './components/Study';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="app">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path = {'/'} element = {<MaintenancePage/>}/>
          <Route path = {'/login'} element = {<Login/>}/>
          <Route path = {'/register'} element = {<Register/>}/>
          <Route path = {'/dashboard'} element = {<Dashboard/>}/>
          <Route path = {'/reset'} element = {<Reset/>}/>
          <Route path = {'/study'} element = {<Study/>}/>
          <Route path = {'/pomodoro'} element = {<Pomodoro/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;