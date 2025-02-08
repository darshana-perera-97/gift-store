import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

export default function Design() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<Home />} />
      </Routes>
    </div>
  );
}
