import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Divide from "../components/Divide";
import { BsArrowReturnLeft, BsWhatsapp } from "react-icons/bs";

function Room({ shouldFetch }) {
  const { id } = useParams();
  const [specs, setSpecs] = useState([]);

  useEffect(() => {
    fetchDataById(id);
  }, [id]);

  const fetchDataById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/specs/${id}`);
      const singleMark = response.data.data;
      setSpecs([singleMark]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataById();
  }, [shouldFetch]);

  return (
    <div className="bg-[#EEEEEE]">
      <Header />
      <div className="">
        {specs.map((spec, index) => (
          <div key={index}>
            <div className="md:flex items-start justify-center pb-12 pt-28 2xl:px-20 md:px-6 px-4">
              <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img
                  className="w-full h-[410px]"
                  alt=""
                  src={spec.spec_image}
                />
              </div>
              <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                  <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                    {spec.spec_title}
                  </h1>
                </div>
                <div>
                  <p className="text-base leading-normal text-gray-600 dark:text-gray-300 mt-7">
                    {spec.spec_text}
                  </p>
                </div>
                <div>
                  <div className="border-t border-b py-4 mt-7 border-gray-500">
                    <div className="flex justify-between items-center cursor-pointer">
                      <Link to="/specs">
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded inline-flex items-center">
                          <span>Odalara geri dön</span>
                          <BsArrowReturnLeft className="ml-2" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="border-b py-4 border-gray-500">
                    <div className="flex justify-between items-center cursor-pointer">
                      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded inline-flex items-center">
                        <span>Detaylar için bizimle iletişime geçiniz</span>
                        <BsWhatsapp className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Divide />
      <Footer />
    </div>
  );
}

export default Room;

// <div>
//   <Header />
//   <div className="pt-12 flex justify-center items-center">
//     {marks.map((mark, index) => (
//       <Card key={index} className="mt-6 w-96">
//         <CardHeader color="blue-gray" className="relative h-56">
//           <img src={mark.image} alt="card" />
//         </CardHeader>
//         <CardBody>
//           <Typography variant="h5" color="blue-gray" className="mb-2">
//             {mark.title}
//           </Typography>
//           <Typography>{mark.description}</Typography>
//         </CardBody>
//         <CardFooter className="pt-0">
//           <Button>Read More</Button>
//         </CardFooter>
//       </Card>
//     ))}
//   </div>
//   <Divide />
//   <Footer />
// </div>
