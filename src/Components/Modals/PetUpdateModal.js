import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import petStore from "../../petStore";

const PetUpdateModal = ({ updateIsOpen, handleUClose, pet }) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [updatedPet, setUpdatedPet] = useState(pet);

  const handleUpdate = (event) => {
    setUpdatedPet({ ...updatedPet, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    petStore.updatePet(updatedPet);
    setIsUpdated(false);
    handleUClose();
  };

  return (
    <div>
      <Modal show={updateIsOpen} onHide={handleUClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={pet.name}
                name="name"
                onChange={handleUpdate}
              />
            </Form.Group>

            <Form.Label>Type:</Form.Label>
            <div>
              <Form.Select name="type" onChange={handleUpdate}>
                <option>{pet.type}</option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </Form.Select>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image Link:</Form.Label>
              <Form.Control
                type="text"
                value={pet.image}
                name="image"
                onChange={handleUpdate}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PetUpdateModal;
