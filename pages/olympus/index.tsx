import type { NextPage } from "next";

import { breakpoints } from "../../styles/constants";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
import Aside from "../../components/aside/Aside";
import HomeContent from "../../components/home-content/HomeContent";

import { HomeContainer } from "../index.styled";

const OlympusPage: NextPage = () => {
  const { isMaxWidth } = useWindowSize();
  return (
    <HomeContainer>
      <HomeContent page="olympus" />
      {!isMaxWidth(breakpoints.mobile) && <Aside />}
    </HomeContainer>
  );
};

export default OlympusPage;
