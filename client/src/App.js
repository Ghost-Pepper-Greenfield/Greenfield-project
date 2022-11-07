import "./App.css";
import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login"
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Reset from './components/Reset';
import NavBar from './components/NavBar';
import Study from './components/Study';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <NavBar isOpen={isOpen}/>
        <Routes>
          <Route path = {'/'} element = {<Login setIsOpen={setIsOpen}/>}/>
          <Route path = {'/register'} element = {<Register/>}/>
          <Route path = {'/dashboard'} element = {<Dashboard setIsOpen={setIsOpen}/>}/>
          <Route path = {'/reset'} element = {<Reset/>}/>
          <Route path = {'/study'} element = {<Study/>}/>
        </Routes>
    </div>
  );
}

export default App;