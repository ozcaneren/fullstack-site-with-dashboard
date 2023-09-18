import axios from "axios";
import { useState, useEffect } from "react";
import EditMark from "../api/EditMark";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import AddMark from "../api/AddMark";

const Dashboard = ({ shouldFetch }) => {
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
    <div>
      <div className="flex flex-col h-full bg-gray-100">
        <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center text-black gap-8">
              <h2 className="font-bold text-xl ml-4">
                <Link to="/">Ana Sayfa</Link>
              </h2>
              <h2 className="font-bold text-xl ml-4">
                <Link to="/dashboard">Panel</Link>
              </h2>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-wrap">
          <div className="p-2 bg-white w-full md:w-60 flex flex-col md:flex">
            <nav>
              <div className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white">
                <Link to="/dashboard/rooms">Odalar</Link>
              </div>
              <div className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white">
                <Link to="/dashboard/specs">Özellikler</Link>
              </div>
            </nav>
          </div>
          <div className="mx-auto mt-8 w-4/5 bg-white p-4 shadow rounded-lg">
            <h2 className="text-gray-500 text-lg font-semibold pb-4">
              Panel Baslangic
            </h2>
            <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
            <div className="max-w-7xl mx-auto pt-8">
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
                              Oda Turu
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                            >
                              Oda Adı
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                            >
                              Adet
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                            >
                              Detay
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                            >
                              Gorsel
                            </th>
                            <th scope="col" className="p-4">
                              <span className="sr-only">Edit</span>
                            </th>
                            <th scope="col" className="p-4">
                              <span className="sr-only">Delete</span>
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
                                {mark.type}
                              </td>
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                {mark.title}
                              </td>
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                {mark.piece}
                              </td>
                              <div className="max-w-xs">
                                <p className="truncate py-4 px-6 text-sm font-medium text-gray-500">
                                  {mark.description}
                                </p>
                              </div>
                              <td className="max-w-xs truncate py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
                                {mark.image}
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
                                  className="text-red-600 hover:underline"
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
                {!editMode && <AddMark onAddMark={getMarks} />}
                {editMode && (
                  <EditMark
                    markId={selectedMarkId}
                    onClose={() => setEditMode(false)}
                    onUpdate={getMarks}
                  />
                )}
                {isLoading && (
                  <p className="text-center text-4xl">Loading...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
