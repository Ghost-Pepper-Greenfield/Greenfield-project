import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Pomodoro from "./Pomodoro";
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <Pomodoro />
    </div>
  );
}

export default App;
