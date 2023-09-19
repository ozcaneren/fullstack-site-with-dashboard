import axios from "axios";
import { useState, useEffect } from "react";
import EditSpec from "../api/EditSpec";
import AddSpec from "../api/AddSpec";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const SpecPanel = ({ shouldFetch }) => {
  const [specs, setSpecs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [editMode, setEditMode] = useState(false);
  const [selectedSpecId, setSelectedSpecId] = useState(null);

  const getSpecs = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:5000/api/specs");
      setSpecs(response.data.data);
    } catch (error) {
      console.error("Error fetching specs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSpecs();
  }, [shouldFetch]);

  const handleEdit = (specId) => {
    setSelectedSpecId(specId);
    setEditMode(true);
  };

  const handleDelete = async (specId) => {
    try {
      await axios.delete(`http://localhost:5000/api/specs/${specId}`);
      getSpecs();
    } catch (error) {
      console.error("Error deleting spec:", error);
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
            <h2 className="text-gray-500 text-lg font-semibold pb-4">Panel</h2>
            <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
            <div className="max-w-7xl mx-auto py-8">
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
                              Oda Baslıgı
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                            >
                              Oda Aciklamasi
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
                        {specs.map((spec, index) => (
                          <tbody
                            key={index}
                            className="bg-white divide-y divide-gray-200"
                          >
                            <tr className="hover:bg-gray-100">
                              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                {spec.spec_title}
                              </td>
                              <div className="max-w-xs">
                                <p className="truncate py-4 px-6 text-sm font-medium text-gray-500">
                                  {spec.spec_text}
                                </p>
                              </div>
                              <td className="max-w-xs truncate py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap ">
                                {spec.spec_image}
                              </td>
                              <td className="text-left whitespace-nowrap">
                                <button
                                  onClick={() => handleEdit(spec._id)}
                                  href="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  <AiOutlineEdit />
                                </button>
                              </td>
                              <td className="whitespace-nowrap">
                                <button
                                  onClick={() => handleDelete(spec._id)}
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
                {!editMode && <AddSpec onAddSpec={getSpecs} />}
                {editMode && (
                  <EditSpec
                    specId={selectedSpecId}
                    onClose={() => setEditMode(false)}
                    onUpdate={getSpecs}
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

export default SpecPanel;
