import petStore from "../petStore";
import PetUpdateModal from "./Modals/PetUpdateModal";
import React, { useState } from "react";

export default function PetItem(props) {
  const pet = props.pet;
  const [updateIsOpen, setUpdateIsOpen] = useState(false);

  const handleUClose = () => setUpdateIsOpen(false);

  const handleUOpen = () => setUpdateIsOpen(true);
  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class="single-doctor">
        <img className="image" alt={pet.name} src={pet.image} />
        <div class="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            class="btn btn-info m-2"
            onClick={() => petStore.handleAdopt(pet.id)}
          >
            Adopt
          </button>
          <button type="button" class="btn btn-info" onClick={handleUOpen}>
            Update pet
          </button>
          <PetUpdateModal
            updateIsOpen={updateIsOpen}
            handleUClose={handleUClose}
            pet={pet}
          />
        </div>
      </div>
    </div>
  );
}
