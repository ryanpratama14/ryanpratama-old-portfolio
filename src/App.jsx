import "./App.css";
import { React, useEffect } from "react";
import Homepage from "./pages/Home/Homepage";
import BackgroundDaisy from "./components/BackgroundDaisy";

function App() {
  useEffect(() => {
    document.title = "Ryan's React App";
  }, []);
  return (
    <div className="-mt-[5rem] pt-32 flex flex-col flex-wrap justify-center items-center from-primary to-secondary text-primary-content bg-gradient-to-b">
      <Homepage />
      <Homepage />
      <Homepage />
      <Homepage />
      <Homepage />
      <Homepage />
    </div>
  );
}

export default App;
