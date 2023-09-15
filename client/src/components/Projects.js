import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Projects() {
  return (
    <>
      <div className="bg-gray-200 dark:bg-[#202125]">
        <div className="container mx-auto">
          <Header />
          <div className="pt-5">
            <h1 className="text-4xl pt-4 font-bold text-center text-gray-800 dark:text-white">
              Marks
            </h1>
          </div>
          <div className="">
            <div className="grid sm:grid-cols-3 justify-items-center px-4 sm:px-0 gap-y-8">

            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Projects;