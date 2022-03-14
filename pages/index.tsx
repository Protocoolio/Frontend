import type { NextPage } from "next";
import Aside from "../components/aside/Aside";
import HomeContent from "../components/home-content/HomeContent";
import { HomeContainer } from "./index.styled";

const HomePage: NextPage = () => {
  return (
    <HomeContainer>
      <HomeContent />
      <Aside flex={1} />
    </HomeContainer>
  );
};

export default HomePage;
