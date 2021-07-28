import React, { useState } from "react";

function Pet({ name, gender, type, age, weight, isAdopted }) {
  const [adoptPet, setAdoptPet] = useState(isAdopted)

  function handleAdoptPet(){
    setAdoptPet(!adoptPet)
  }


  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {gender === "male" ? '♂' : '♀'}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {!adoptPet ? <button className="ui primary button" onClick={handleAdoptPet}>Adopt pet</button> : <button className="ui disabled button">Already adopted</button>}
      </div>
    </div>
  );
}

export default Pet;
