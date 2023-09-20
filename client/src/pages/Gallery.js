import { useState, useEffect } from "react";
import axios from "axios";
import Divide from "../components/Divide";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function Gallery({ shouldFetch }) {
  const [marks, setMarks] = useState([]);

  const getMarks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/marks");
      setMarks(response.data.data);
    } catch (error) {
      console.error("Error fetching marks:", error);
    } finally {
    }
  };

  useEffect(() => {
    getMarks();
  }, [shouldFetch]);

  return (
    <>
      <Helmet>
        <title>Galeri</title>
      </Helmet>
      <Header />
      <div className="flex justify-center items-center">
        <div className="container mx-auto">
          <div className="pt-24 pb-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
              Galeri
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {marks.map((mark, index) => (
              <div key={index}>
                <img
                  className="h-[260px] w-[408px] rounded-lg"
                  src={mark.image}
                  alt="images"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Divide />
      <Footer />
    </>
  );
}

export default Gallery;
