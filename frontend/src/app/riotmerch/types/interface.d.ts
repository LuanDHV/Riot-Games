export interface IBanner {
  id: number;
  bannerDesktop?: string;
  bannerMobile?: string;
  name: string;
  color: string;
  logo?: string;
}
export interface IProducts {
  id: number;
  name: string;
  price: number;
  logo: string;
  category: string;
  tags: TypeTags[];
  descriptions: string[];
  imgs: string[];
  quantity?: number;
}

export type TypeTags =
  | "Special Edition"
  | "Preorder"
  | "Limited Edition"
  | "Retired"
  | "Riot Exclusive";
export interface IProductCardProps {
  product: IProducts;
  index: number;
}

export interface ILatestCollaborations {
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

export interface IRiotMerchCartProps {
  openRiotMerchCart: boolean;
  setOpenRiotMerchCart: (open: boolean) => void;
}

export interface ICart {
  cartId: string;
  products: ICartItem[];
}

export interface ICartItem {
  id: number;
  name: string;
  price: number;
  logo: string;
  category: string;
  tags: string[];
  descriptions: string[];
  imgs: string[];
  quantity: number;
}

export interface ICartAdd {
  productId: number;
  quantity: number;
}

export interface ICartUpdate {
  productId: number;
  quantity: number;
}

export interface ICartRemove {
  productId: number;
}

export interface ICartClear {
  cartId: string;
}
