import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

const petUrl = "http://localhost:3001/pets"

function App() {
  const [pets, setPets] = useState([]);
  // const [filters, setFilters] = useState({ type: "all" });
  const [filters, setFilters] = useState("all");

  function handleChangePet(e){
    setFilters(e.target.value)
  }

  console.log(filters)

  useEffect(() => {
    fetch(filters === "all" ? petUrl : petUrl + `?type=${filters}`)
    .then(res => res.json())
    .then(pet => setPets(pet))
  }, [filters])

  if(pets === []){
    return <h2>Loading...</h2>
  }


  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChangePet}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
