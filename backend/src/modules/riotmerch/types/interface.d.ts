export interface IBanner {
  bannerDesktop?: string;
  bannerMobile?: string;
  name: string;
  color: string;
  logo?: string;
}

interface ILatestCollaborations {
  numb: string;
  title: string;
  description: string;
  img: string;
}

interface IProducts {
  name: string;
  price: number;
  logo: string;
  category: string;
  tags: TypeTags[];
  descriptions: string[];
  imgs: string[];
}

export type TypeTags =
  | 'Special Edition'
  | 'Preorder'
  | 'Limited Edition'
  | 'Retired'
  | 'Riot Exclusive';
