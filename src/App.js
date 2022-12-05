import "./App.css";
import { React, useEffect } from "react";
import Homepage from "./pages/Homepage";

function App() {
  useEffect(() => {
    document.title = "Ryan's React Apps";
  }, []);
  return (
    <div className="h-screen flex flex-col flex-wrap justify-center items-center ceo">
      <Homepage />
      <Homepage />
      <Homepage />
    </div>
  );
}

export default App;
