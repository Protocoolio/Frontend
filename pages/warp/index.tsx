import type { NextPage } from "next";

import Aside from "../../components/aside/Aside";
import HomeContent from "../../components/home-content/HomeContent";

import { HomeContainer } from "../index.styled";

const WarpPage: NextPage = () => {
  return (
    <HomeContainer>
      <HomeContent page="warp" />
      <Aside />
    </HomeContainer>
  );
};

export default WarpPage;
