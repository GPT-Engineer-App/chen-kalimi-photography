import { useState } from "react";
import ImagePopup from "../components/ImagePopup";

const Index = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openPopup = (imageUrl) => {
    setSelectedImage(imageUrl);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const ImageGrid = () => (
    <div>
      {}
      <img src="path_to_image.jpg" onClick={() => openPopup("path_to_image.jpg")} alt="Thumbnail" />
      {}
    </div>
  );

  return (
    <>
      <ImageGrid />
      <ImagePopup isOpen={isPopupOpen} onClose={closePopup} imageUrl={selectedImage} />
    </>
  );
};

export default Index;
