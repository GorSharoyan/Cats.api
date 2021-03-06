import React from "react";

import "./Footer.css";

//components
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";

export default function Footer() {
  return (
    <div className="footer">
      <ol className="list">
        <li>Copyright : Gor Sharoyan 2022</li>
        <li>Email :gor.sharoyan95@gmail.com</li>
      </ol>
      <div>
        <SocialMediaBar />
      </div>
    </div>
  );
}
