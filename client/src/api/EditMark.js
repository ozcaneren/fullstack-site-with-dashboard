import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const EditMark = ({ markId, onClose, onUpdate }) => {
  const [mark, setMark] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getMarkById = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:5000/api/marks/${markId}`);
      setMark(response.data.data);
    } catch (error) {
      console.error("Error fetching mark:", error);
    } finally {
      setIsLoading(false);
    }
  }, [markId]);

  useEffect(() => {
    getMarkById();
  }, [getMarkById]); // 'getMarkById' bağımlılığını ekledik


  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/marks/${markId}`, mark);
      onUpdate(); // İşaretlerin güncellendiğini FetchMarks bileşenine bildirin.
      onClose(); // EditMark bileşenini kapatın.
    } catch (error) {
      console.error("Error updating mark:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-3xl">Edit Bookmark</h2>
      {isLoading ? (
        <p className="text-center text-4xl">Loading...</p>
      ) : (
        <div className="max-w-3xl mx-auto mt-4">
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={mark.title || ""}
                onChange={(e) => setMark({ ...mark, title: e.target.value })}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={mark.description || ""}
                onChange={(e) => setMark({ ...mark, description: e.target.value })}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                URL
              </label>
              <input
                type="text"
                id="url"
                name="url"
                value={mark.url || ""}
                onChange={(e) => setMark({ ...mark, url: e.target.value })}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={onClose} className="mr-2 text-red-600 hover:underline">
                Cancel
              </button>
              <button type="submit" className="text-blue-600 hover:underline">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditMark;
