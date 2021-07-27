import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, setPets }) {
  const allDogs = pets.map(dog => {
    return <Pet key={dog.id} name={dog.name} gender={dog.gender} type={dog.type} age={dog.age} weight={dog.weight}/>
  })

  console.log(pets)

  return <div className="ui cards">{allDogs}</div>;
}

export default PetBrowser;
