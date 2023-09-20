import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Projects({ shouldFetch }) {
  const [marks, setMarks] = useState([]);
  const navigate = useNavigate();

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

  const handleCardClick = (id) => {
    navigate(`/rooms/${id}`);
  };

  return (
    <>
      <div className="bg-gray-200 dark:bg-[#202125]">
        <Helmet>
          <title>Odalar</title>
        </Helmet>
        <div className="container mx-auto">
          <div className="pt-24 pb-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
              Odalar
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-x-4 gap-y-12 ">
            {marks.map((mark, index) => (
              <Card key={index} className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    className="w-[352px] h-[216px]"
                    src={mark.image}
                    alt="card"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {mark.title}
                  </Typography>
                  <Typography>
                    {mark.description.substring(0, 150)}...
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button onClick={() => handleCardClick(mark._id)}>
                    Detaylar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
