import React, { useState } from "react";
import axios from "axios";
import { Card, Input, Button } from "@material-tailwind/react";

const AddSpec = ({ onAddSpec }) => {
  const [spec_title, setSpecTitle] = useState("");
  const [spec_text, setSpecText] = useState("");
  const [spec_image, setSpecImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newSpec = {
        spec_title: spec_title,
        spec_text: spec_text,
        spec_image: spec_image,
      };

      await axios.post("http://localhost:5000/api/specs", newSpec);

      onAddSpec();

      setSpecTitle("");
      setSpecText("");
      setSpecImage("");
    } catch (error) {
      console.error("Error creating spec:", error);
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
              value={spec_title}
              onChange={(e) => setSpecTitle(e.target.value)}
              size="lg"
              label="Ozelligin Basligi"
              color="gray"
            />
            <Input
              value={spec_text}
              onChange={(e) => setSpecText(e.target.value)}
              size="lg"
              label="Ozelligin Icerigi"
              color="gray"
            />
            <Input
              value={spec_image}
              onChange={(e) => setSpecImage(e.target.value)}
              size="lg"
              label="Görsel"
              color="gray"
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Ana Sayfaya Ozellik Ekle
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddSpec;
