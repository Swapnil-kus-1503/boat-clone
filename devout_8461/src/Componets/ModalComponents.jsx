import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Img,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
  } from "@chakra-ui/react";
  
  export function ModalComponent({ isOpen, setIsOpen, products }) {
    const onClose = () => {
      setIsOpen(false);
    };
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
  
                <BreadcrumbItem>
                  <BreadcrumbLink href="/login">Login page</BreadcrumbLink>
                </BreadcrumbItem>
                
                <BreadcrumbItem>
                  <BreadcrumbLink href="/cart">Cart page</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="/products">Products page</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              {products.id}{" "}
              {products.category}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Img boxSize="20rem" src={products.image} />
              <Text> {products.name} </Text>
              <Text>Rating : {products.rating} </Text>
              <Text textDecoration={"line-through"}> Original Price: {`₹ ${products.stkPrice}`}</Text>
              <Text> Special Price: {`₹ ${products.price}`} </Text>
              <Text>OFF: {products.off} </Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Go Back
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  