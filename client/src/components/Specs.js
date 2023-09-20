import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Specs({ shouldFetch }) {
  const [specs, setSpecs] = useState([]);
  const navigate = useNavigate();

  const getSpecs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/specs");
      setSpecs(response.data.data);
    } catch (error) {
      console.error("Error fetching specs:", error);
    } finally {
    }
  };

  useEffect(() => {
    getSpecs();
  }, [shouldFetch]);

  const handleCardClick = (id) => {
    navigate(`/specs/${id}`);
  };

  return (
    <>
      <div className="bg-gray-200 dark:bg-[#202125]">
        <div className="container mx-auto text-center">
          <div className="pb-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
              Neden Biz?
            </h1>
          </div>
          <div className="ml-8">
            <div className="grid grid-cols-3 gap-x-4 gap-y-12 ">
              {specs.map((spec, index) => (
                <Card key={index} className="mt-6 w-96">
                  <CardHeader color="blue-gray" className="relative h-56">
                    <img
                      className="w-[352px] h-[216px]"
                      src={spec.spec_image}
                      alt="card"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {spec.spec_title}
                    </Typography>
                    <Typography>
                      {spec.spec_text.substring(0, 150)}...
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button onClick={() => handleCardClick(spec._id)}>
                      Detaylar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Specs;
