import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const EditMark = ({ markId, onClose, onUpdate }) => {
  const [mark, setMark] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getMarkById = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/marks/${markId}`
      );
      setMark(response.data.data);
    } catch (error) {
      console.error("Error fetching mark:", error);
    } finally {
      setIsLoading(false);
    }
  }, [markId]);

  useEffect(() => {
    getMarkById();
  }, [getMarkById, markId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/marks/${markId}`, mark);
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating mark:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMark({ ...mark, [name]: value });
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-3xl">Oda Duzenle</h2>
      {isLoading ? (
        <p className="text-center text-4xl">Yukleniyor...</p>
      ) : (
        <div className="max-w-3xl mx-auto mt-4">
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Oda Turu
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={mark.type || ""}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Oda Adı
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={mark.title || ""}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="piece"
                className="block text-sm font-medium text-gray-700"
              >
                Adet
              </label>
              <input
                type="text"
                id="piece"
                name="piece"
                value={mark.piece || ""}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Detay
              </label>
              <textarea
                id="description"
                name="description"
                value={mark.description || ""}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Gorsel
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={mark.image || ""}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Iptal
              </button>
              <button
                type="submit"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Kaydet
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditMark;
