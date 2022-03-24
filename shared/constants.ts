import {
  CollectionsSortItem,
  FilterOptions,
  NetworkSortItem,
  SortOptions,
} from "../types/CommonTypes";

export const sortOptions: SortOptions[] = [
  "Launching soon",
  "Most viewed",
  "Name alphabetical",
  "Recently added",
];

export const filterOptions: FilterOptions[] = [
  "Contracts verified",
  "Network",
  "Selections",
];

export const networkSortItems: NetworkSortItem[] = [
  { id: 1, name: "Fantom", src: require("./images/fantom.png").default },
  { id: 2, name: "BSC", src: require("./images/binance.png").default },
  { id: 3, name: "Polygon", src: require("./images/polygon.png").default },
  { id: 4, name: "Avalanche", src: require("./images/avalanche.png").default },
];

export const collectionsSortItems: CollectionsSortItem[] = [
  { id: 1, name: "Renounced" },
  { id: 2, name: "Audited" },
  { id: 3, name: "KYC" },
  { id: 4, name: "Promoted" },
];
