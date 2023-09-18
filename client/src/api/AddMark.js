import React, { useState } from "react";
import axios from "axios";
import { Card, Input, Button } from "@material-tailwind/react";

const AddMark = ({ onAddMark }) => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [piece, setPiece] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newMark = {
        type: type,
        title: title,
        piece: piece,
        description: description,
        image: image,
      };

      await axios.post("http://localhost:5000/api/marks", newMark);

      onAddMark();

      setType("");
      setTitle("");
      setPiece("");
      setDescription("");
      setImage("");
    } catch (error) {
      console.error("Error creating mark:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Card color="transparent" shadow={false}>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              value={type}
              onChange={(e) => setType(e.target.value)}
              size="lg"
              label="Oda Turu"
              color="gray"
            />
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              size="lg"
              label="Oda Adı"
              color="gray"
            />
            <Input
              value={piece}
              onChange={(e) => setPiece(e.target.value)}
              size="lg"
              label="Adet"
              color="gray"
            />
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              size="lg"
              label="Detay"
              color="gray"
            />
            <Input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              size="lg"
              label="Görsel"
              color="gray"
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Oda Ekle
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddMark;
