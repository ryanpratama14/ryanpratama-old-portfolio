import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Instagram from "./components/Instagram";
import HireMe from "./components/HireMe";
import LoadToTop from "./components/LoadToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "react-fullscreen-loading";
import { themeChange } from "theme-change";
import { routeOptions } from "./store/helper/Routes";

const Index = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    themeChange(false);
  }, []);
  useEffect(() => {
    let loadingTimer = setTimeout(() => setLoading(true), 1 * 1000);
    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);
  return (
    <BrowserRouter>
      {loading ? (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Navbar />
          <Routes>
            {routeOptions?.map((e) => {
              return <Route path={e.path} element={e.element} />;
            })}
          </Routes>
          <LoadToTop />
          <Instagram />
          <Footer />
        </motion.div>
      ) : (
        <Loading loading background="bg-primary"></Loading>
      )}
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
