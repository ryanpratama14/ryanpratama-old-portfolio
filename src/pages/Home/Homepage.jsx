import { react, useEffect } from "react";
import Header from "./components/Header/Header";

const Homepage = () => {
  useEffect(() => {
    document.title = "Ryan's React App";
  }, []);
  return <Header />;
};

export default Homepage;
