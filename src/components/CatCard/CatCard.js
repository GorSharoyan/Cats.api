import React from "react";

export default function CatCard({ catName, catImage }) {
  return (
    <div>
      <div>
        <h4>{catName}</h4>
      </div>
      <div>
        <img src={catImage} />
      </div>
    </div>
  );
}
