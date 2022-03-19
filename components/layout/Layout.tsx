import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";

import { Main } from "./Layout.styled";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
