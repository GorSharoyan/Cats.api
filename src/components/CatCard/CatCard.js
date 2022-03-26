import React from "react";

import "./CatCard.css";

export default function CatCard({ catName, catImage }) {
  return (
    <div className="card">
      <div>
        <h4>{catName}</h4>
      </div>
      <div>
        <img className="image" src={catImage} />
      </div>
    </div>
  );
}
