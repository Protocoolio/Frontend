import { useState } from "react";
import ContentCard from "./content-card/ContentCard";
import FilterBar from "./filter-bar/FilterBar";
import { HomeContentWrapper, CardsWrapper } from "./HomeContent.styled";

const HomeContent = () => {
  const [filterActive, setFilterActive] = useState<boolean>(false);

  return (
    <HomeContentWrapper flex={4}>
      <FilterBar
        filterActive={filterActive}
        setFilterActive={setFilterActive}
      />
      <CardsWrapper>
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </CardsWrapper>
    </HomeContentWrapper>
  );
};

export default HomeContent;
