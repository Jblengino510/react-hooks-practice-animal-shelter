import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

const dogUrl = "http://localhost:3001/pets"

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    fetch(dogUrl)
    .then(res => res.json())
    .then(dog => setPets(dog))
  }, [])

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} setPets={setPets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
