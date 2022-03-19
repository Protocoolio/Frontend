import type { NextPage } from "next";

import Aside from "../../components/aside/Aside";
import HomeContent from "../../components/home-content/HomeContent";

import { HomeContainer } from "../index.styled";

const TombPage: NextPage = () => {
  return (
    <HomeContainer>
      <HomeContent page="tomb" />
      <Aside flex={1} />
    </HomeContainer>
  );
};

export default TombPage;
