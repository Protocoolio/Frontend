import { createSlice } from "@reduxjs/toolkit";
import { CardItem, FilterOption } from "../types/CommonTypes";

interface InitialCardState {
  cards: CardItem[];
  cardFilters: FilterOption[];
}

const initialState: InitialCardState = {
  cards: [],
  cardFilters: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCards(state, action) {
      state.cards = action.payload;
    },
    addFilter(state, action) {
      state.cardFilters.push(action.payload);
    },
    removeFilter(state, action) {
      const newState = state.cardFilters.filter(
        (item: string) => item !== action.payload
      );
      state.cardFilters = newState;
    },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice;
