import { useState } from "react";
import ContentCard from "./content-card/ContentCard";
import FilterBar from "./filter-bar/FilterBar";
import SortPanel from "./sort-panel/SortPanel";
import {
  HomeContentWrapper,
  CardsWrapper,
  MainContentWrapper,
} from "./HomeContent.styled";

interface HomeContentProps {
  page?: string;
}

const HomeContent = ({ page }: HomeContentProps) => {
  const [filterActive, setFilterActive] = useState<boolean>(false);

  return (
    <HomeContentWrapper flex={4}>
      <FilterBar
        filterActive={filterActive}
        setFilterActive={setFilterActive}
      />
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
