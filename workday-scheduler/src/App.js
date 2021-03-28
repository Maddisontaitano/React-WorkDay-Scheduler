import React from "react";
import './App.css';
import Workday from './components/workDay';
import DateTime from './components/Time/DateTime.js';
import Slots from './components/Slots/Slots';

function App() {
  return (
    <div>
    <Workday />
      <DateTime />
        <Slots />
    </div>
  
  );
}

export default App;
