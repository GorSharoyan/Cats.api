import React from "react";

//UI
import "./Header.css";

//assets
import logoAsset from "../../assets/logoAsset.png";

//Components
import Logo from "../../Logo/Logo";

export default function Header() {
  return (
    <header className="header">
      <div className="headerComponent">
        <Logo assetUrl={logoAsset} />
      </div>
      <div className="headerComponent">
        <h3>Simple Web Page about Simple Cats</h3>
      </div>
    </header>
  );
}
