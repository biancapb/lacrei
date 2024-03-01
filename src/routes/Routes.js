import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import User from "../pages/User/User";
import Professional from "../pages/Professional/Professional";

const Rotas = () => {
  return (
    <Routes>
      <Route exact element={<Home />} path="/" />
      <Route element={<Professional />} path="/professional" />
      <Route element={<User />} path="/user" />
    </Routes>
  );
};

export default Rotas;
