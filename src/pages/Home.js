import React from "react";

// components
import CatCardSelector from "../components/CatCardSelector/CatCardSelector";

//UI
import "./Home.css";

export default function Home() {
  return (
    <div className="contianter">
      <CatCardSelector />
    </div>
  );
}
