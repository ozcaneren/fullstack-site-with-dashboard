import React from "react";
import Specs from "../components/Specs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Divide from "../components/Divide";

function Project() {
  return (
    <>
      <Header />
      <div className="pt-24">
        <Specs />
      </div>
      <Divide />
      <Footer />
    </>
  );
}

export default Project;
