import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LearnTailwindcss from "./components/LearnTailwindcss";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />}></Route>
          <Route path="/build-tailwindcss-form" element={<LearnTailwindcss />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
