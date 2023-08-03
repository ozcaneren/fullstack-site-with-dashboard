import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditMark = ({ markId, onClose, onUpdate }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchMarkData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/marks/${markId}`);
        const markData = response.data.data;
        setTitle(markData.title);
        setUrl(markData.url);
        setDescription(markData.description);
      } catch (error) {
        console.error('Error fetching mark data:', error);
      }
    };

    fetchMarkData();
  }, [markId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedMark = {
        title: title,
        url: url,
        description: description,
      };

      await axios.put(`http://localhost:5000/api/marks/${markId}`, updatedMark);
      
      onUpdate();
      
      onClose();
    } catch (error) {
      console.error('Error updating mark:', error);
    }
  };

  

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className="flex justify-center items-center mx-auto mt-4">
          <div className="flex flex-col">
            <div className="rounded-lg">
              <div className="min-w-full">
                <div className="overflow-hidden">
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className=" px-4 py-1 h-12 text-gray-800 rounded-l-lg border border-gray-300 focus:outline-none" placeholder="Title" />
                  <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}  className="px-4 py-1 h-12 text-gray-800 rounded-x-lg border border-gray-300 focus:outline-none" placeholder="Description" />
                  <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} className=" px-4 py-1 h-12 text-gray-800 rounded-x-lg border border-gray-300 focus:outline-none" placeholder="URL" />
                  <button type="submit" className="bg-blue-500 px-4 py-2 h-12 w-[57px] text-white rounded-r-lg">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </form>
    </div>
  );
};

export default EditMark;