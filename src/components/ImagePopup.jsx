import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Image } from "@chakra-ui/react";

const ImagePopup = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Image src={imageUrl} alt="Full-size" objectFit="contain" w="100%" h="100%" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ImagePopup;