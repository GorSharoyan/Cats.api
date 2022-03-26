import React from "react";

//assets
import logoAsset from "../assets/logoAsset.png";

//UI
import "./Logo.css";

export default function Logo({ assetUrl }) {
  return (
    <div>
      <img className="logo" src={assetUrl} alt="logo" />
    </div>
  );
}
