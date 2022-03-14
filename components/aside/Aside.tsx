import ContentCard from "../home-content/content-card/ContentCard";
import { AsideContainer } from "./Aside.styled";

interface AsideProps {
  flex: number;
}

const Aside = ({ flex }: AsideProps) => {
  return (
    <AsideContainer flex={flex}>
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </AsideContainer>
  );
};

export default Aside;
