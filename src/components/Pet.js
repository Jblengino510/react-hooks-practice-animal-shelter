import React, { useState } from "react";

function Pet({ id, name, type, gender, age, weight, isAdopted, onAdoptPet }) {
  
function handleAdoptClick(){
  onAdoptPet(id)
}


  return (
    <div className="card">
      <div className="content">
        <span className="header">
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
        {isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={handleAdoptClick}>Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;
