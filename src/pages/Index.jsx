import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
  Link,
} from '@chakra-ui/react';

const IndexPage = ({ isOpen, onClose, selectedImage }) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl" maxW="56rem">
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Selected Image</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image src={selectedImage} alt="Selected" objectFit="contain" w="100%" h="auto" />
      </ModalBody>
      <ModalFooter>
        <Link href={selectedImage} isExternal>
          Open in New Tab
        </Link>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default IndexPage;
