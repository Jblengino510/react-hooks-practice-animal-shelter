import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets }) {
  const allPets = pets.map(pet => {
    return <Pet key={pet.id} name={pet.name} gender={pet.gender} type={pet.type} age={pet.age} weight={pet.weight} isAdopted={pet.isAdopted}/>
  })

  console.log(pets)


  return <div className="ui cards">{allPets}</div>;
}

export default PetBrowser;
