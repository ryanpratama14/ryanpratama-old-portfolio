import "./App.css";
import { React, useEffect } from "react";
import Homepage from "./pages/Home/Homepage";
import { motion } from "framer-motion";

function App() {
  useEffect(() => {
    document.title = "Ryan's React Apps";
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="-mt-[5rem] pt-32 flex flex-col flex-wrap justify-center items-center from-primary to-base-200 text-primary-content bg-gradient-to-b">
        <Homepage />
        <Homepage />
        <Homepage />
        <Homepage />
        <Homepage />
        <Homepage />
      </div>
    </motion.div>
  );
}

export default App;
