import React from "react";

//UI
import "./Header.css";

//Components
import Logo from "../../Logo/Logo";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      Cats.API
    </header>
  );
}
