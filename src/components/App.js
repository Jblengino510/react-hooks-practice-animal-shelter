import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

const petUrl = "http://localhost:3001/pets"

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleChangeType(type){
    setFilters({type})
  }

  function handleFindPetsClick(){
    fetch(filters.type === "all" ? petUrl : petUrl + `?type=${filters.type}`)
    .then(res => res.json())
    .then(setPets)
  }

  function handleAdoptPet(id){
    console.log("id: ", id)
    const updatedPets = pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    })
    setPets(updatedPets)
  }


  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
             onFindPetsClick={handleFindPetsClick}
             onChangeType={handleChangeType}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
