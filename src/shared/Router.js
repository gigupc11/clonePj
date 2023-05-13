import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Main from "../pages/Main"
import Login from "../pages/Login"
import Test from "../pages/Test"

const Router = () => {
  return (
    <BrowserRouter>

        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer></Footer>

    </BrowserRouter>

  );
};

export default Router;
