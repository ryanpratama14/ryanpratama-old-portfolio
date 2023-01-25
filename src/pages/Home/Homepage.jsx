import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header/Header";

const Homepage = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
    </>
  );
};

export default Homepage;
