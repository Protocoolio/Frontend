import { FilterOption } from "../types/CommonTypes";
import { cardActions } from "../store/card-slice";
import { AppDispatch } from "../store/store";

export const filtersHandler =
  (filtersData: FilterOption[], filter: FilterOption) =>
  (dispatch: AppDispatch) => {
    if (filtersData.find((item) => item === filter)) {
      dispatch(cardActions.removeFilter(filter));
    } else dispatch(cardActions.addFilter(filter));
  };
