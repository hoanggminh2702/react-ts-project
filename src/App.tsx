import Aos from "aos";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "~/App.scss";
import Layout from "~/layout";
import HomePage from "~/pages/home";
import Products from "~/pages/Products";
import Images from "./assets/images/Images";
import Profile from "./components/Profile";
import { moviesData } from "./data/data";

type Props = {};

const App = (props: Props) => {
  Aos.init();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile nickName="Binh An" name="Binh An" images={moviesData} dateOfBirth="1999.01.01" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
