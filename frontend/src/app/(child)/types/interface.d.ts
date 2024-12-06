export interface ISection1 {
  title: string;
  link: string;
}

export interface ISocials {
  icon: string;
  alt: string;
  link: string;
}

export interface IIcons {
  icon: string;
  alt: string;
  link: string;
}

export interface IDescriptions {
  text: string;
}

export interface ISection2 {
  title: string;
  link: string;
}

export interface IFooterData {
  section1: ISection1[];
  socials: ISocials[];
  icons: IIcons[];
  descriptions: IDescriptions[];
  section2: ISection2[];
}
