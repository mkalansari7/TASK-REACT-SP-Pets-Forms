import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import petStore from "../../petStore";

const PetCreateModal = ({ isOpen, handleClose }) => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    image: "",
  });

  const handleChange = (event) => {
    setPet({ ...pet, [event.target.name]: event.target.value });
  };
  console.log(pet);

  const handleSubmit = (event) => {
    event.preventDefault();
    petStore.addPet(pet);
    handleClose();
  };
  return (
    <div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Label>Type:</Form.Label>
            <div>
              <Form.Select name="type" onChange={handleChange}>
                <option>choose a pet type</option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </Form.Select>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image Link:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the image link"
                name="image"
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PetCreateModal;
