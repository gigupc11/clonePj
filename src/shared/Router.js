import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Main from "../pages/Main"
import Login from "../pages/Login"

const Router = () => {
  return (
    <BrowserRouter>

        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer></Footer>

    </BrowserRouter>

  );
};

export default Router;
