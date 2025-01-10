interface IBanner {
  id: number;
  bannerDesktop?: string;
  bannerMobile?: string;
  name: string;
  color: string;
  logo?: string;
}
interface IProducts {
  id: number;
  name: string;
  price: number;
  logo: string;
  tags: TypeTags[];
  imgs: string[];
}

export type TypeTags =
  | "Special Edition"
  | "Preorder"
  | "Limited Edition"
  | "Retired"
  | "Riot Exclusive";
interface ProductCardProps {
  product: IProducts;
  index: number;
}

interface ILatestCollaborations {
  id: number;
  numb: string;
  title: string;
  description: string;
  img: string;
}

export interface ISubItems {
  title: string;
  link: string;
}

export interface IFooterDataSection1 {
  title: string;
  subItems: ISubItems[];
}

export interface IFormFields {
  label: string;
  type: string;
}

export interface IFooterDataSection2 {
  title: string;
  link: string;
}
