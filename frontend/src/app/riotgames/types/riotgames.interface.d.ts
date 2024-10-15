export interface IMenusHeader {
  title: string;
  href?: string;
  subMenuData?: ISubMenusHeader[];
}

export interface ISubMenusHeader {
  title: string;
  href: string;
}

export interface IWhatsHappening {
  title: string;
  icon: string;
  image: string;
  link: string;
  thumbMain: boolean;
}

export interface IGames {
  launchImg: string;
  logotype: string;
  platforms: string[];
  link: string;
}

export interface IEsports {
  img: string;
  logo: string;
  link: string;
}

export interface IEntertainments {
  img: string;
  logo: string;
  link: string;
}

export interface IMenusFooter {
  title: string;
  link: string;
}

export interface ISocialIcons {
  white: string;
  red: string;
  alt: string;
  link: string;
}
