import "@/App.scss";
import Layout from "@/layout";
import Aos from "aos";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import HomePage from "./pages/home";
import { Router } from "./routes/routes";

type Props = {};

const App = (props: Props) => {
  console.log(Router);
  Aos.init();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          {Router.map((route) => {
            const Component = route.component;
            return (
              <Route
                path={route.path}
                key={route.key}
                element={<Component />}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
