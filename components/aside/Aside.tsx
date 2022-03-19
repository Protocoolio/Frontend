import ContentCard from "../home-content/content-card/ContentCard";
import { AsideContainer, CardsWrapper, Title } from "./Aside.styled";

interface AsideProps {
  flex: number;
}

const Aside = ({ flex }: AsideProps) => {
  return (
    <AsideContainer flex={flex}>
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
