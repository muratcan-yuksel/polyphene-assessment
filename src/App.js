import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Assessments from "./components/Assessments";
import StylingAssessment from "./Pages/StylingAssessment";

export default function App() {
  return (
    <div className="App">
      {/* <Assessments /> */}
      <Routes>
        <Route path="/" element={<Assessments />} exact />{" "}
        <Route path="/styling" element={<StylingAssessment />} exact />{" "}
        {/* <Route path="/:id" element={<Character />} exact />{" "} */}
      </Routes>
    </div>
  );
}
