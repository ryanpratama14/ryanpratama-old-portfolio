import "./App.css";
import { React, useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "FaoTech: Ryan's React Apps";
  }, []);
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
