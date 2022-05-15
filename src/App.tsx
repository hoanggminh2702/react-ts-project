import "@/App.scss";
import Aos from "aos";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./routes/router";

type Props = {};

const App = (props: Props) => {
  Aos.init();

  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
};

export default App;
