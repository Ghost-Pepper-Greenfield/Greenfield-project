import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Pomodoro from "./components/Pomodoro";

function App() {
  return (
    <div className="app">
      <Pomodoro />
    </div>
  );
}

export default App;