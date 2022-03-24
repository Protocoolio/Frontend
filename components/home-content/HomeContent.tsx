import ContentCard from "./content-card/ContentCard";
import FilterBar from "./filter-bar/FilterBar";
import SortPanel from "./sort-panel/SortPanel";

import {
  HomeContentWrapper,
  CardsWrapper,
  MainContentWrapper,
} from "./HomeContent.styled";
import { CardInfo } from "../../types/CommonTypes";

interface HomeContentProps {
  cards?: CardInfo[];
}

const HomeContent = ({ cards }: HomeContentProps) => {
  return (
    <HomeContentWrapper>
      <FilterBar />
      <MainContentWrapper>
        <SortPanel />
        <CardsWrapper>
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </CardsWrapper>
      </MainContentWrapper>
    </HomeContentWrapper>
  );
};

export default HomeContent;
