import React from "react";

//assets
import logoAsset from "../assets/logoAsset.png";

//UI
import "./Logo.css";

export default function Logo() {
  return (
    <div>
      <img className="logo" src={logoAsset} alt="logo" />
    </div>
  );
}
