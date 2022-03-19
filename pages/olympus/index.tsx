import type { NextPage } from "next";
import Aside from "../../components/aside/Aside";
import HomeContent from "../../components/home-content/HomeContent";
import { HomeContainer } from "../index.styled";

const OlympusPage: NextPage = () => {
  return (
    <HomeContainer>
      <HomeContent page="olympus" />
      <Aside flex={1} />
    </HomeContainer>
  );
};

export default OlympusPage;
