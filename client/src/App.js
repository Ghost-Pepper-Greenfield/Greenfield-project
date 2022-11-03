import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Pomodoro from "./Pomodoro";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="app">
      <Pomodoro />
      <BrowserRouter>
        <Routes>
          <Route path = {'/login'} element = {<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;