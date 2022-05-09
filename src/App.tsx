import "@/App.scss";
import Layout from "@/layout";
import Aos from "aos";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import HomePage from "./pages/home";
import { generateRoutes } from "./routes/router";
import { menuItem } from "./routes/routes";

type Props = {};

const App = (props: Props) => {
  Aos.init();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          {generateRoutes(menuItem)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
