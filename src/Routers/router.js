import React from "react";
import { Routes, Route } from "react-router";
import Home from "../Page/Home";
import Submission from "../Page/Submission";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/submission" element={<Submission/>}/>
      </Routes>
    </>
  );
}

export default Routers;
