import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
const allPets = pets.map(pet => <Pet key={pet.id} id={pet.id} name={pet.name} type={pet.type} gender={pet.gender} age={pet.age} weight={pet.weight} isAdopted={pet.isAdopted} onAdoptPet={onAdoptPet}/>)

  return <div className="ui cards">{allPets}</div>;
}

export default PetBrowser;
