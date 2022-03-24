export type SortOptions =
  | "Recently added"
  | "Most viewed"
  | "Name alphabetical"
  | "Launching soon";

export type FilterOptions = "Network" | "Contracts verified" | "Selections";

export interface CardInfo {
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
  name: string;
  src: string;
}

export interface CollectionsSortItem {
  id: number;
  name: string;
}
