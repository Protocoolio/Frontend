import ContentCard from "../home-content/content-card/ContentCard";

import { AsideContainer, CardsWrapper, Title } from "./Aside.styled";

const Aside = () => {
  return (
    <AsideContainer>
      <Title>PROMOTED</Title>
      <CardsWrapper>
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </CardsWrapper>
    </AsideContainer>
  );
};

export default Aside;
