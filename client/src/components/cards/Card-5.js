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

function Card1({ shouldFetch }) {
  const [marks, setMarks] = useState([]);
  const navigate = useNavigate();

  const getMark = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/marks/6505f5c51a3348e73c5b450d"
      );
      const singleMark = response.data.data;
      setMarks([singleMark]);
    } catch (error) {
      console.error("Error fetching mark:", error);
    } finally {
    }
  };

  useEffect(() => {
    getMark();
  }, [shouldFetch]);

  const handleCardClick = (id) => {
    navigate(`/rooms/${id}`);
  };

  return (
    <div className="w-full p-4">
      {marks.map((mark, index) => (
        <Card key={index} className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img className="w-[352px] h-[216px]" src={mark.image} alt="card" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {mark.title}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={() => handleCardClick(mark._id)}>Detaylar</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Card1;
