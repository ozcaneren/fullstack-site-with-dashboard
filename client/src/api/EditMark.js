import axios from "axios";
import { useState, useEffect } from "react";
import EditMark from "./EditMark";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlineEdit } from "react-icons/ai";

const FetchMarks = ({ shouldFetch }) => {
  const [marks, setMarks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [editMode, setEditMode] = useState(false);
  const [selectedMarkId, setSelectedMarkId] = useState(null);

  const getMarks = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:5000/api/marks");
      setMarks(response.data.data);
    } catch (error) {
      console.error("Error fetching marks:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMarks();
  }, [shouldFetch]);

  const handleEdit = (markId) => {
    setSelectedMarkId(markId);
    setEditMode(true);
  };

  const handleDelete = async (markId) => {
    try {
      await axios.delete(`http://localhost:5000/api/marks/${markId}`);
      getMarks();
    } catch (error) {
      console.error("Error deleting mark:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-3xl">My bookmark app</h2>
      <div className="max-w-3xl mx-auto mt-4">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 table-fixed">
                  <thead className="bg-gray-100">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                      >
                        URL
                      </th>
                      <th scope="col" className="p-4">
                        <span className="sr-only">Edit</span>
                      </th>
                      <th scope="col" className="p-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  {marks.map((mark, index) => (
                    <tbody
                      key={index}
                      className="bg-white divide-y divide-gray-200"
                    >
                      <tr className="hover:bg-gray-100">
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                          {mark.title}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
                          {mark.description}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                          <a
                            href={`https://${mark.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {mark.url}
                          </a>
                        </td>
                        <td className="text-left whitespace-nowrap">
                          <button
                            onClick={() => handleEdit(mark._id)}
                            href="#"
                            className="text-blue-600 hover:underline"
                          >
                            <AiOutlineEdit />
                          </button>
                        </td>
                        <td className="whitespace-nowrap">
                          <button
                            onClick={() => handleDelete(mark._id)}
                            href="#"
                            className="text-blue-600 hover:underline"
                          >
                            <HiOutlineTrash />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {editMode && (
        <EditMark
          markId={selectedMarkId}
          onClose={() => setEditMode(false)}
          onUpdate={getMarks}
        />
      )}
      {isLoading && <p className="text-center text-4xl">Loading...</p>}
    </div>
  );
};

export default FetchMarks;
