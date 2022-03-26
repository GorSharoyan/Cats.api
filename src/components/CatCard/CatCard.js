import React from "react";

import "./CatCard.css";

export default function CatCard({ catImage }) {
  return (
    <div className="card">
      <div>
        <img className="image" src={catImage} />
      </div>
    </div>
  );
}
