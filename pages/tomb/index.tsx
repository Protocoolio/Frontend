import type { NextPage } from "next";

import { breakpoints } from "../../styles/constants";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
import Aside from "../../components/aside/Aside";
import HomeContent from "../../components/home-content/HomeContent";

import { HomeContainer } from "../index.styled";

const TombPage: NextPage = () => {
  const { isMaxWidth } = useWindowSize();
  return (
    <HomeContainer>
      <HomeContent page="tomb" />
      {!isMaxWidth(breakpoints.mobile) && <Aside />}
    </HomeContainer>
  );
};

export default TombPage;
