import "./App.css";
import { React, useEffect } from "react";
import Homepage from "./pages/Home/Homepage";
import BackgroundDaisy from "./components/BackgroundDaisy";

function App() {
  useEffect(() => {
    document.title = "Ryan's React App";
  }, []);
  return <Homepage />;
}

export default App;
