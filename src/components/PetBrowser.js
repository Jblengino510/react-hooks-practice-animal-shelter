import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, setPets }) {
  const allDogs = pets.map(dog => {
    return <Pet />
  })
  return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>;
}

export default PetBrowser;
