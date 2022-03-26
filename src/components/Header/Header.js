import React from "react";

//UI
import "./Header.css";

//Components
import Logo from "../../Logo/Logo";

export default function Header() {
  return (
    <header className="header">
      <div className="headerComponent">
        <Logo />
      </div>
      <div className="headerComponent">
        <h3>Simple Web Page about Simple Cats</h3>
      </div>
    </header>
  );
}
