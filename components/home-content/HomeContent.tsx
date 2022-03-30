import ContentCard from "./content-card/ContentCard";
import FilterBar from "./filter-bar/FilterBar";
import SortPanel from "./sort-panel/SortPanel";

import {
  HomeContentWrapper,
  CardsWrapper,
  MainContentWrapper,
  ShowFiltersButton,
  FilterButtonWrapper,
  FilterCounter,
} from "./HomeContent.styled";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
import { breakpoints } from "../../styles/constants";
import { useState } from "react";

interface HomeContentProps {
  // cards?: CardInfo[];
  page: string;
}

const HomeContent = ({ page }: HomeContentProps) => {
  const [showFilterBar, setShowFilterBar] = useState(false);

  const { isMaxWidth } = useWindowSize();
  return (
    <>
      <HomeContentWrapper>
        <FilterBar showFilterBar={showFilterBar} />
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
        {isMaxWidth(breakpoints.mobile) && (
          <FilterButtonWrapper>
            <ShowFiltersButton
              variant="contained"
              onClick={() => setShowFilterBar(!showFilterBar)}
            >
              Filters <FilterCounter>3</FilterCounter>
            </ShowFiltersButton>
          </FilterButtonWrapper>
        )}
      </HomeContentWrapper>
    </>
  );
};

export default HomeContent;
