import "./App.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap-5.0.0-beta2.min.css";
import "./assets/css/LineIcons.2.0.css";
import "./assets/css/main.css";
import "./assets/css/tiny-slider.css";
import PetsList from "./Components/PetsList";
import petStore from "./petStore";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import PetCreateModal from "./Components/Modals/PetCreateModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const handleOpen = () => setIsOpen(true);

  const pets = petStore.pets;
  return (
    <div className="App">
      <PetsList pets={pets} />
      <Button onClick={handleOpen}>Add pet</Button>
      <PetCreateModal isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
}

export default App;
