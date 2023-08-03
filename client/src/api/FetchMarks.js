import axios from 'axios';
import { useEffect, useState } from 'react';


const FetchMarks = () => {
  const [marks, setMarks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMarks = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:5000/api/marks');
      setMarks(response.data.data);
    } catch (error) {
      console.error('Error fetching marks:', error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMarks();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {marks.map((mark, index) => (
            <li key={index}>
              {mark.title} {mark.url}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FetchMarks;