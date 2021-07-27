import React from "react";

function Pet({ name, gender, type, age, weight }) {
  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {gender==="male" ? '♂' : '♀'}
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
        <button className="ui disabled button">Already adopted</button>
        <button className="ui primary button">Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;
