import "@/App.scss";
import Layout from "@/layout";
import HomePage from "@/pages/home";
import Products from "@/pages/Products";
import Aos from "aos";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
