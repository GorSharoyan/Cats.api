import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "../pages/Home";

export default function SwitchRouter() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </main>
  );
}
