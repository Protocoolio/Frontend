export type SortOptions =
  | "Recently added"
  | "Most viewed"
  | "Name alphabetical"
  | "Launching soon";

export type FilterAccordionsOptions =
  | "Network"
  | "Contracts verified"
  | "Selections";

export type FilterOption =
  | "Fantom"
  | "BSC"
  | "Polygon"
  | "Avalanche"
  | "Renounced"
  | "Audited"
  | "KYC"
  | "Promoted"
  | "Verified"
  | "NotVerified";

export interface CardItem {
  name: string;
  image: string;
  description: string;
  startDate: string;
  network: string;
  verified: boolean;
  added: string;
  viewCount: number;
  tags: string[];
  socials: {
    discord: string;
    twitter: string;
    website: string;
    telegram: string;
  };
}

export interface NetworkSortItem {
  id: number;
  name: FilterOption;
  src: string;
}

export interface CollectionsAndContractsSortItem {
  id: number;
  name: FilterOption;
}
