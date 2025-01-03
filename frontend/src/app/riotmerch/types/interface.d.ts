interface IShop {
  bannerDesktop?: string;
  bannerMobile?: string;
  name: string;
  color: string;
  logo?: string;
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
