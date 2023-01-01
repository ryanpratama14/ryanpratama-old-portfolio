import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import ToDo from "./pages/4. To Do/ToDo";
import About from "./pages/About/About";
import Instagram from "./components/Instagram";
import ExpenseApp from "./pages/5. Fin Tracker/ExpenseApp";
import Testimonial from "./pages/Testimonials/Testimonial";
import Cards from "./pages/1. Member Card/Cards";
import Appform from "./pages/2. Form App/Appform";
import Zikirapp from "./pages/3. Zikr App/Zikirapp";
import Declare from "./pages/3. Zikr App/Declare";
import { motion } from "framer-motion";

export default function Routing() {
  return (
    <HashRouter>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/zikrapp" element={<Zikirapp />} />
          <Route path="/zikrapp/declare" element={<Declare />} />
          <Route path="/reviews" element={<Testimonial />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/todoapp" element={<ToDo />} />
          <Route path="/appform" element={<Appform />} />
          <Route path="/about" element={<About />} />
          <Route path="/financial-tracker" element={<ExpenseApp />} />
          <Route path="*" element={<App />} />
        </Routes>
        <Instagram />
        <Footer />
      </motion.div>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
