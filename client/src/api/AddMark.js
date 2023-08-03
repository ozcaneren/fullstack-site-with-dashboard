import React, { useState } from 'react';
import axios from 'axios';
import {
  Card,
  Input,
  Button,
} from "@material-tailwind/react";

const AddMark = ({ onAddMark }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newMark = {
        title: title,
        url: url,
        description: description,
      };

      await axios.post('http://localhost:5000/api/marks', newMark);

      // Call the parent component's callback function to refresh the marks
      onAddMark();

      // Clear form fields after successful submission
      setTitle('');
      setUrl('');
      setDescription('');
    } catch (error) {
      console.error('Error creating mark:', error);
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <Card color="transparent" shadow={false}>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} size="lg" label="Title" color='gray' />
          <Input value={description} onChange={(e) => setDescription(e.target.value)} size="lg" label="Description" color='gray' />
          <Input value={url} onChange={(e) => setUrl(e.target.value)} size="lg" label="URL" color='gray' />
        </div>
        <Button type='submit' className="mt-6" fullWidth>
          Create Mark
        </Button>
      </form>
    </Card>
    </div>
  );
};

export default AddMark;


